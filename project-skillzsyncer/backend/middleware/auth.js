// middleware/auth.js
const jwt = require("jsonwebtoken");

// user payload
function createTokenForUser(user) {
  const payload = {
    _id: user._id,
    fullname:user.fullname,
    email: user.email,
    profileImage: user.profileImageURL,
    role: user.role,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET);
  return token;
}
// validate the token , it have all the require fields
function validateToken(token) {
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        return payload;
      } catch (err) {
        throw new Error("Token is not valid");
      }
    
}
//authentication by cookie so that we take the require parameter and maintain it inside the app.
function AuthenticationCookie(cookie) {
  return (req, res, next) => {
    const token = req.cookie[cookie];
    //if the user was not in the data Base
    if (!token)
      return res
        .status(401)
        .json({ msg: "No token, authorization denied" })
        .next();

    try {
      const userPayload = validateToken(token);
      req.user = userPayload;
      next();
    } catch (e) {
      res.status(400).json({ msg: "Token is not valid" }).next();
    }
  };
}

module.exports = { AuthenticationCookie };
