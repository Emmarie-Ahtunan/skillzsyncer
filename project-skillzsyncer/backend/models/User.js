const{Schema, model} = require('mongoose');
const{randomBytes,createHmac}=require("crypto");// using the crypto module to hash the password 


const userSchema = new Schema({
    fullname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        },
    password:{
        type:String,
        require: true,

    },
    salt:{
        type:String,
    },
    profileImage:{
        type:String,
        default: "../assets/images/man.png"
    }, 

    skills:{
        type: String
    },

    bio:{
        type:String
    },
    role:{
        type:String,
        default: "User"
    },
    
    

},{timestamps:true});


userSchema.pre("save",function(next){
    const user = this;
    if(!user.isModified("password")) return;
    const salt = randomBytes(16).toString('hex');
    const hashPassword = createHmac("sha256",salt)
    .update(user.password)
    .digest("hex");
    user.salt = salt;
    this.password = hashPassword;
    next();
})
// is this hashing completed or there is more?
// should we add required field to true in role



const User = model('User', userSchema);
module.exports = User;