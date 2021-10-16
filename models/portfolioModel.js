const mongoose = require('mongoose');

const portfolioSchema = mongoose.Schema({
    uuid: String,
    name: String,
    contactNo: String,
    description: String,
    achievements: String,
    education: String,
    jobExperience: String,
    socials: String
});

module.exports = mongoose.model('Portfolio', portfolioSchema);