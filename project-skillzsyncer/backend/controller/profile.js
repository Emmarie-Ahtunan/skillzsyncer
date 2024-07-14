const Profile = require('../models/profile');
const Community = require('../models/community');

// Controller to create a new profile
exports.createProfile = async (req, res) => {
    const { userId, skills, bio, contact, communities, profileImage, projects } = req.body;

    try {
        const newProfile = await Profile.create({
            userId,
            skills,
            bio,
            contact,
            communities,
            profileImage,
            projects
        });
        res.status(201).json(newProfile);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller to fetch a profile
exports.getProfile = async (req, res) => {
    const { userId } = req.params;

    try {
        const profile = await Profile.findOne({ userId });
        if (!profile) {
            return res.status(404).json({ error: 'Profile not found' });
        }
        res.status(200).json(profile);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller to update profile information
exports.updateProfile = async (req, res) => {
    const { userId } = req.params;
    const { skills, bio, contact, communities, profileImage, projects } = req.body;

    try {
        const updatedProfile = await Profile.findOneAndUpdate(
            { userId },
            { skills, bio, contact, communities, profileImage, projects },
            { new: true }
        );
        res.status(200).json(updatedProfile);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller to join a community
exports.joinCommunity = async (req, res) => {
    const { userId, communityId } = req.body;

    try {
        const community = await Community.findById(communityId);
        if (!community) {
            return res.status(404).json({ error: 'Community not found' });
        }

        const profile = await Profile.findOne({ userId });
        if (!profile) {
            return res.status(404).json({ error: 'Profile not found' });
        }

        if (!profile.communities.includes(communityId)) {
            profile.communities.push(communityId);
            await profile.save();
        }

        if (!community.members.includes(userId)) {
            community.members.push(userId);
            await community.save();
        }

        res.status(200).json(profile);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Function to add a project to a profile
exports.addProject = async (req, res) => {
    const { userId } = req.params;
    const { title, description, status } = req.body;

    try {
        const updatedProfile = await Profile.findOneAndUpdate(
            { userId },
            { $push: { projects: { title, description, status } } },
            { new: true }
        );
        res.status(200).json(updatedProfile);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



// Function to update a project in the profile
exports.updateProject = async (req, res) => {
    const { userId, projectId } = req.params;
    const { title, description, status } = req.body;

    try {
        const updatedProfile = await Profile.findOneAndUpdate(
            { userId, 'projects._id': projectId },
            {
                $set: {
                    'projects.$.title': title,
                    'projects.$.description': description,
                    'projects.$.status': status
                }
            },
            { new: true }
        );
        res.status(200).json(updatedProfile);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Function to upload profile image
const multer = require('multer');

// Multer configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/profile-images'); // Destination folder for profile images
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, `${uniqueSuffix}-${file.originalname}`);
    }
});

const upload = multer({ storage: storage }).single('profileImage');
exports.uploadProfileImage = async (req, res) => {
    upload(req, res, async function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json({ error: 'Multer error: ' + err.message });
        } else if (err) {
            return res.status(500).json({ error: 'Unknown error: ' + err.message });
        }

        const { userId } = req.params;
        const profileImage = req.file ? req.file.path : null; // Save the file path in profileImage field

        try {
            const updatedProfile = await Profile.findOneAndUpdate(
                { userId },
                { profileImage },
                { new: true }
            );
            res.status(200).json(updatedProfile);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });
};




