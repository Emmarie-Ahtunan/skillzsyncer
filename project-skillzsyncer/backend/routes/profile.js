const express = require('express');
const router = express.Router();
const profileController = require('../controller/profile');

// POST request to create a new profile
router.post('/', profileController.createProfile);

// PUT request to update profile information
router.put('/:userId', profileController.updateProfile);

module.exports = router;
