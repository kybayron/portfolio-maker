const { v4: uuid } = require('uuid');
const Users = require('../models/userModel');

const getUsers = async (req, res) => {
    try{
        const userList = await Users.find();
        res.json(userList);
    }catch(err){
        res.json({message: err});
    }
}

const createUser = async (req, res) => {   
    const id = uuid();
    const user = new Users({
        userName: req.body.userName,
        uuid: id
    });
    try{
        const savedUser = await user.save();
        res.json(savedUser);
    }catch(err){
        res.json({message: err});
    }
    console.log(`User [${req.body.userName}] added to the database.`);
};

const getUser = async (req, res) => {
    try{
        const user = await Users.findOne({uuid: req.params.uuid});
        res.json(user);
    }catch(err){
        res.json({message: err});
    }
};

const deleteUser = async (req, res) => { 
    try{
        const removedUser = await Users.remove({uuid: req.params.uuid});
        res.json(removedUser);
    }catch(err){
        res.json({message: err});
    }
};

const updateUser = async (req,res) => {
    try{
        const updatedUser = await Users.updateOne({uuid: req.params.uuid}, {$set: req.body});
        res.json(updatedUser);
    }catch(err){
        res.json({message: err});
    }
};

module.exports = {getUsers, createUser, getUser, deleteUser, updateUser}