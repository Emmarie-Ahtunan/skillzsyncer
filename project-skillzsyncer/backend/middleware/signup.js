// middleware/signup.middleware.js
const User = require('../models/User');

async function signupMiddleware(req, res) {
  const { fullname, email, username, password } = req.body;

  try {
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({ error: 'Email or username already exists' });
    }

    const newUser = new User({ fullname, email, username, password });
    await newUser.save();

    const token = newUser.createToken();
    res.status(201).json({ message: 'User created successfully', token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = signupMiddleware;
