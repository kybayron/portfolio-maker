const mongoose = require('mongoose');

const portfolioSchema = mongoose.Schema({
    uuid: String,
    name: String,
    contactNo: String,
    description: String,
    achievements: Array,
    education: String,
    jobExperience: Array,
    socials: String
});

module.exports = mongoose.model('Portfolio', portfolioSchema);