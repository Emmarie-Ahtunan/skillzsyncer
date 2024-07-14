// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const authRoutes = require('./routes/auth');
const communityRoutes = require('./routes/community');
const profileRoutes = require('./routes/profile'); // Import profile routes
const { AuthenticationCookie } = require('./middleware/auth.js');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection
const uri = process.env.MONGODB_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

// Routes
app.use('/api', authRoutes);
app.use('/profile', profileRoutes); // Use profile routes
app.get('/profile', AuthenticationCookie('token'), (req, res) => {
    const user = req.user;
    res.json({ user });
});
app.use('/community', communityRoutes); // Use community routes

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
