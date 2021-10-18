const mongoose = require('mongoose');



const jobSchema = new mongoose.Schema({
    title: String,
    year: String,
    description: String
});

const achievementSchema = new mongoose.Schema({
    title: String,
    year: String,
    description: String
});

const portfolioSchema = mongoose.Schema({
    googleId: String,
    fullName: String,
    contactNo: String,
    description: String,
    achievements: [achievementSchema],
    education: String,
    jobExperience: [jobSchema],
    socials: String
});

module.exports = mongoose.model('Portfolio', portfolioSchema);