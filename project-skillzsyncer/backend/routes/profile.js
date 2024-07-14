const express = require('express');
const router = express.Router();
const profileController = require('../controller/profile');
const communityController = require('../controller/community');
const multer = require('multer');
const upload = multer({ dest: '../assets/uploads' }); // Configure as per your needs


// GET request to fetch the profiles
router.get('/:userId', profileController.getProfile);

// POST request to upload profile image
router.post('/upload-image/:userId', upload.single('profileImage'), async (req, res) => {
    const { userId } = req.params;

    try {
        const profile = await Profile.findOneAndUpdate(
            { userId },
            { profileImage: req.file.path },
            { new: true }
        );
        res.status(200).json(profile);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// POST request to create a new profile
router.post('/', profileController.createProfile);

// PUT request to update profile information
router.put('/:userId', profileController.updateProfile);

// POST request to join a community
router.post('/join-community', profileController.joinCommunity);

// PUT request to add a project to a profile
router.post('/:userId/add-project', profileController.addProject);

// PUT request to update a project in the profile
router.put('/:userId/update-project/:projectId', profileController.updateProject);

// PUT request to upload profile image
router.put('/:userId/upload-image', profileController.uploadProfileImage);


module.exports = router;
