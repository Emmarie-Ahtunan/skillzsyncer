// routes/community.js
const express = require('express');
const router = express.Router();
const communityController = require('../controller/community');

const { AuthenticationCookie } = require('../middleware/auth');

// POST request to create a new community
router.post('/create', AuthenticationCookie('token'), communityController.createCommunity);

// PUT request to assign admin role to community creator
router.put('/:communityId/assign-admin/:userId', communityController.assignAdmin);

// PUT request to add a member to the community
router.put('/:communityId/add-member/:userId', communityController.addMember);


module.exports = router;
