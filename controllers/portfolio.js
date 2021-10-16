const { v4: uuid } = require('uuid');
const Portfolio = require('../models/portfolioModel');

const getPortfolio = async (req, res) => {
    try{
        const portfolio = await portfolio.findOne({uuid: req.params.uuid});
        res.json(portfolio);
    }catch(err){
        res.json({message: err});
    }
}

const createPortfolio = async (req, res) => { 
    const id = uuid();  
    const name = (req.body.name) ? req.body.name : null;
    const contactNo = (req.body.contactNo) ? req.body.contactNo : null;
    const description = (req.body.description) ? req.body.description : null;
    const achievements = (req.body.achievements) ? req.body.achievements : null;
    const education = (req.body.education) ? req.body.education : null;
    const jobExperience = (req.body.jobExperience) ? req.body.jobExperience : null;
    const socials = (req.body.socials) ? req.body.socials : null;
    const portfolio = new Portfolio({
        uuid : id,
        name : name,
        contactNo : contactNo,
        description : description,
        achievements : achievements,
        education : education,
        jobExperience : jobExperience,
        socials : socials
    });
    try{
        const savedPortfolio = await portfolio.save();
        res.json(savedPortfolio);
    }catch(err){
        res.json({message: err});
    }
};

const updatePortfolio = async (req,res) => {
    try{
        const updatedPortfolio = await portfolio.updateOne({uuid: req.params.uuid}, {$set: req.body});
        res.json(updatedPortfolio);
    }catch(err){
        res.json({message: err});
    }
};

const deletePortfolio = async (req, res) => { 
    try{
        const removedPortfolio = await portfolio.remove({uuid: req.params.uuid});
        res.json(removedPortfolio);
    }catch(err){
        res.json({message: err});
    }
};

module.exports = {getPortfolio, createPortfolio, updatePortfolio, deletePortfolio};