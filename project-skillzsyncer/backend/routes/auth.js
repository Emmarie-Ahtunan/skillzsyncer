// routes/auth.routes.js
const express = require('express');
const router = express.Router();
const signupMiddleware = require('../middleware/signup');
const loginMiddleware = require('../middleware/login');
const { AuthenticationCookie } = require('../middleware/auth');

// Signup route
router.post('/signup', signupMiddleware);

// Login route
router.post('/login', loginMiddleware);

// Protected route example (requires authentication)
router.get('/profile', AuthenticationCookie('auth_token_cookie'), (req, res) => {
  const user = req.user;
  res.json({ user });
});

module.exports = router;
