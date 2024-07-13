const Profile = require('../models/profile');

// Controller to create a new profile
exports.createProfile = async (req, res) => {
    const { userId, skills, bio, contact } = req.body;

    try {
        const newProfile = await Profile.create({
            userId,
            skills,
            bio,
            contact
        });
        res.status(201).json(newProfile);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller to update profile information
exports.updateProfile = async (req, res) => {
    const { userId } = req.params;
    const { skills, bio, contact } = req.body;

    try {
        const updatedProfile = await Profile.findOneAndUpdate(
            { userId },
            { skills, bio, contact },
            { new: true }
        );
        res.status(200).json(updatedProfile);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
