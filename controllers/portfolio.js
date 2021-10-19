const { v4: uuid } = require('uuid');
const { deleteOne } = require('../models/portfolioModel');
const Portfolio = require('../models/portfolioModel');

const getPortfolio = async (req, res) => {
    try{
        const portfolio = await Portfolio.findOne({googleId: req.params.googleId});
        if(portfolio != null)
            res.json(portfolio);
        else{
            res.status(404).send({message: "Not Found"});
        }
    }catch(err){
        res.json({message: err});
    }
}

const createPortfolio =  (req, res) => { 
    Portfolio.findOne({googleId: req.body.googleId}, function(err,user){
        if(err){
            return done(err);
        }
        else if(user){
            res.status(422).send({message: "ID Already Exists"});
        }
        else {
            const googleId = (req.body.googleId) ? req.body.googleId : null;
            const fullName = (req.body.fullName) ? req.body.fullName : null;
            const title = (req.body.title) ? req.body.title : null;
            const email = (req.body.email) ? req.body.email : null;
            const contactNo = (req.body.contactNo) ? req.body.contactNo : null;
            const description = (req.body.description) ? req.body.description : null;
            const achievements = (req.body.achievements) ? req.body.achievements : null;
            const education = (req.body.education) ? req.body.education : null;
            const jobExperience = (req.body.jobExperience) ? req.body.jobExperience : null;
            const socials = (req.body.socials) ? req.body.socials : null;
            const portfolio = new Portfolio({
                googleId : googleId,
                fullName : fullName,
                title: title,
                contactNo : contactNo,
                email: email,
                description : description,
                achievements : achievements,
                education : education,
                jobExperience : jobExperience,
                socials : socials
            });
            
                portfolio.save();
                res.status(200).send({message: "Successful"});
            }

    });
    

    
};

const updatePortfolio = async (req,res) => {
    try{
        const updatedPortfolio = await Portfolio.updateOne({googleId: req.params.googleId}, {$set: req.body});
        res.json(updatedPortfolio);
    }catch(err){
        res.json({message: err});
    }
};

const deletePortfolio = async (req, res) => { 
    try{
        const removedPortfolio = await Portfolio.remove({googleId: req.params.googleId});
        res.json(removedPortfolio);
    }catch(err){
        res.json({message: err});
    }
};

const getError = async (req, res) => { 
    res.status(405).send({message: "Method not supported"});
};

module.exports = {getPortfolio, createPortfolio, updatePortfolio, deletePortfolio, getError};