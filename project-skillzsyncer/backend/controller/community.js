// controllers/community.js
const Community = require('../models/community');
const Profile = require('../models/profile');

// Function to create a new community
exports.createCommunity = async (req, res) => {
    const { name, description, skill } = req.body;
    const admin = req.user; // Assuming you're using authentication middleware to get the current user

    try {
        // Check if the admin (current user) already has a community
        const existingCommunity = await Community.findOne({ admin: admin._id });
        if (existingCommunity) {
            return res.status(400).json({ error: 'User already has a community' });
        }

        // Create new community
        const newCommunity = await Community.create({
            name,
            description,
            admin: admin._id,
            skill 
        });

        // Update admin profile to include the new community
        admin.communities.push(newCommunity._id);
        await admin.save();

        res.status(201).json(newCommunity);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Function to add a member to the community
exports.addMember = async (req, res) => {
    const { communityId, userId } = req.params;

    try {
        const community = await Community.findOne({ _id: communityId });

        if (!community) {
            return res.status(404).json({ error: 'Community not found' });
        }

        // Check if the user is already a member of the community
        if (community.members.includes(userId)) {
            return res.status(400).json({ error: 'User is already a member of this community' });
        }

        community.members.push(userId);
        await community.save();

        res.status(200).json(community);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



// Function to assign admin role to community creator
exports.assignAdmin = async (req, res) => {
    const { communityId, userId } = req.params;

    try {
        const community = await Community.findOne({ _id: communityId });

        if (!community) {
            return res.status(404).json({ error: 'Community not found' });
        }

        // Check if the user is the creator of the community
        if (community.admin.equals(userId)) {
            return res.status(400).json({ error: 'User is already the admin of this community' });
        }

        community.admin = userId;
        await community.save();

        res.status(200).json(community);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};