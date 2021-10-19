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
    title: {
        type: String,
        required: true
    },
    contactNo: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    achievements: [achievementSchema],
    education: {
        type: String,
        required: true
    },
    jobExperience: [jobSchema],
    socials: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Portfolio', portfolioSchema);