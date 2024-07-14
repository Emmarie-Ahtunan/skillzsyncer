const mongoose = require('mongoose');
const { Schema,model } = mongoose;
const communitySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    members: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    admin: {
        type: Schema.Types.ObjectId,
        ref: 'Profile'
    },
    skill: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Community = model('Community', communitySchema);
module.exports = Community;
