// models/User.js
const { Schema, model } = require('mongoose');
const { randomBytes, createHmac } = require('crypto');
const jwt = require('jsonwebtoken');

const userSchema = new Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  salt: { type: String },
  profileImage: { type: String, default: "../assets/images/man.png" },
  role: { type: String, default: "User" }
}, { timestamps: true });

// Encrypting the password by hashing
userSchema.pre("save", function(next) {
  const user = this;
  if (!user.isModified("password")) return next();
  
  const salt = randomBytes(16).toString('hex');
  const hashPassword = createHmac("sha256", salt)
    .update(user.password)
    .digest("hex");

  user.salt = salt;
  user.password = hashPassword;
  next();
});

// Method to validate password
userSchema.methods.validatePassword = function(password) {
  const hashPassword = createHmac("sha256", this.salt)
    .update(password)
    .digest("hex");
  return this.password === hashPassword;
};

// Function to create JWT token for user
userSchema.methods.createToken = function() {
  const payload = {
    _id: this._id,
    fullname: this.fullname,
    email: this.email,
    profileImage: this.profileImage,
    role: this.role
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET);
  return token;
};

const User = model('User', userSchema);
module.exports = User;
