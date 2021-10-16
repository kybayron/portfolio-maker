const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userName: String,
    uuid: String
});

module.exports = mongoose.model('Users', userSchema);