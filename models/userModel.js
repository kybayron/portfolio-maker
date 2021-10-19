const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    googleId: {
        type: String,
        unique: true,
        immutable: true,
        required: true
    }
});

module.exports = mongoose.model('Users', userSchema);