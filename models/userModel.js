const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fullName: String,
    googleId: {
        type: String,
        unique: true,
        immutable: true
    }
});

module.exports = mongoose.model('Users', userSchema);