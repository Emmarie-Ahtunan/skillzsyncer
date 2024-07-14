const mongoose = require('mongoose');
const { Schema,model } = mongoose;

const profileSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true,
    },
    skills: {
        type: String,
    },
    bio: {
        type: String,
    },
    contact: {
        type: String,
    },
    communities: [{
        type: Schema.Types.ObjectId,
        ref: 'Community',
    }],
    profileImage: {
        type: String, // URL to the image
    },
    projects: [{
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        status: {
            type: String,
            enum: ['ongoing', 'finished'],
            default: 'ongoing',
        },
    }],
}, { timestamps: true });
const profile = model('Profile', profileSchema);
module.exports = profile ;
