const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fullName: String,
    googleId: String
});

module.exports = mongoose.model('Users', userSchema);