const mongoose = require('mongoose');



const jobSchema = new mongoose.Schema({
    _id: false,
    title: String,
    year: String,
    description: String
});

const achievementSchema = new mongoose.Schema({
    _id: false,
    title: String,
    year: String,
    description: String
});

const portfolioSchema = mongoose.Schema({
    
    googleId: {
        type: String,
        unique: true,
        immutable: true,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    title: String,
    contactNo: String,
    email: String,
    description: String,
    achievements: [achievementSchema],
    education: String,
    jobExperience: [jobSchema],
    socials: String
});

module.exports = mongoose.model('Portfolio', portfolioSchema);