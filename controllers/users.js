const Users = require('../models/userModel');

const getUsers = async (req, res) => {
    try{
        const userList = await Users.find();
        res.json(userList);
    }catch(err){
        res.json({message: err});
    }
}

const createUser =  (req, res) => {
    var flag = 0;
    const body = req.body
    var myArr = ["googleId","fullName"];

    for(var key in body){

        if(myArr.indexOf(key) < 0){
            flag = 1;
            break;
        }
    }
    if(flag == 1){
        res.status(400).send({message: "Invalid Key"});
    }
    else{     
    Users.findOne({googleId: req.body.googleId}, function(err,user){
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
        else if(user){
            res.status(422).send({message: "ID Already Exists"});
        }
        else {
            const user = new Users({
                googleId : req.body.googleId,
                fullName : req.body.fullName
            });
                user.save();
                res.status(200).send({message: "Successful"});
            }
    });
}
};

const getUser = async (req, res) => {
    try{
        const user = await Users.findOne({googleId: req.params.googleId});
        if(user!=null){
            res.json(user);
        }
        else{
            res.status(404).send({message: "Not Found"});
        }
    }catch(err){
        res.json({message: err});
    }
};

const deleteUser = async (req, res) => { 
    try{
        const removedUser = await Users.deleteOne({googleId: req.params.googleId});
        res.json(removedUser);
    }catch(err){
        res.json({message: err});
    }
};

const updateUser = async (req,res) => {
    var flag = 0;
    const body = req.body
    var myArr = ["googleId","fullName"];
    try{
        for(var key in body){
            if(key == 'googleId'){
                flag = 2;
                break;
            }
            if(myArr.indexOf(key) < 0){
                flag = 1;
                break;
            }
        }
        if(flag == 1){
            res.status(400).send({message: "Invalid Key"});
        }
        else if(flag == 2){
            res.status(422).send({message: "Cannot Update googleId"});
        }
        else{
            const updatedUser = await Users.updateOne({googleId: req.params.googleId}, {$set: req.body});
            res.json(updatedUser);
        }
    }catch(err){
        res.json({message: err});
    }
};

const sendError = async (req, res) => { 
    res.status(405).send({message: "Method not supported"});
};

module.exports = {getUsers, createUser, getUser, deleteUser, updateUser, sendError}