// middleware/auth.middleware.js
const jwt = require("jsonwebtoken");

// Function to validate JWT token
function validateToken(token) {
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    return payload;
  } catch (err) {
    throw new Error("Token is not valid");
  }
}

// Middleware function for cookie-based authentication
function AuthenticationCookie(cookie) {
  return (req, res, next) => {
    const token = req.cookies[cookie]; // Access cookies correctly

    // If token is not present, deny authorization
    if (!token) {
      return res.status(401).json({ msg: "No token, authorization denied" });
    }

    try {
      const userPayload = validateToken(token);
      req.user = userPayload; // Set user payload on request object
      next();
    } catch (e) {
      res.status(400).json({ msg: "Token is not valid" });
    }
  };
}

module.exports = { AuthenticationCookie };
