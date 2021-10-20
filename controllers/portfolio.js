const { v4: uuid } = require('uuid');
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
        else if(!req.body.googleId){
            res.status(400).send({message: "googleId is Required"});
        }
        else if(!req.body.fullName){
            res.status(400).send({message: "fullName is Required"});
        } 
        else if(!(req.body.fullName.length <= 50 && req.body.fullName.length >= 2)){
            res.status(400).send({message: "fullName must be 2 to 50 characters"});
        }
        else if(!req.body.title){
            res.status(400).send({message: "Title is Required"});
        }
        else if(!(req.body.title.length <= 50 && req.body.title.length >= 2)){
            res.status(400).send({message: "Title must be 2 to 50 characters"});
        } 
        else if(!req.body.email){
            res.status(400).send({message: "Email is Required"});
        } 
        else if(!req.body.email.match(/\S+@\S+\.\S+/)){
            res.status(400).send({message: "Email is not valid"});
        }
        else if(!req.body.contactNo){
            res.status(400).send({message: "Contact Number is Required"});
        }
        else if(!req.body.contactNo.match(/^(09|\+639)\d{9}$/)){
            res.status(400).send({message: "Contact Number is not valid"});
        }
        else if(!req.body.description){
            res.status(400).send({message: "Description is Required"});
        }
        else if(!(req.body.description.length <= 280 && req.body.description.length >= 2)){
            res.status(400).send({message: "Description must be 2 to 280 characters"});
        }
        else if(!req.body.education){
            res.status(400).send({message: "Education is Required"});
        }
        else if(!(req.body.education.length <= 50 && req.body.education.length >= 2)){
            res.status(400).send({message: "Education must be 2 to 50 characters"});
        } 
        else if(!req.body.socials){
            res.status(400).send({message: "Socials is Required"});
        }
        else if(!(req.body.socials.length <= 50 && req.body.socials.length >= 2)){
            res.status(400).send({message: "Socials must be 2 to 50 characters"});
        }   
        else if(user){
            res.status(422).send({message: "ID Already Exists"});
        }
        else {
            //const googleId = (req.body.googleId) ? req.body.googleId : null;
            //const fullName = (req.body.fullName) ? req.body.fullName : null;
            //const title = (req.body.title) ? req.body.title : null;
            //const email = (req.body.email) ? req.body.email : null;
            //const contactNo = (req.body.contactNo) ? req.body.contactNo : null;
            //const description = (req.body.description) ? req.body.description : null;
            const achievements = (req.body.achievements) ? req.body.achievements : null;
            //const education = (req.body.education) ? req.body.education : null;
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