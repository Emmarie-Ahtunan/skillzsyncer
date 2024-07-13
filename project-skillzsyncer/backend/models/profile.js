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
    }
}, { timestamps: true });

const profile = model('Profile', profileSchema);
module.exports = profile ;
