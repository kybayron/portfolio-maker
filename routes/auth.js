const express = require('express');
const authRoutes = express.Router();
const passport = require('passport');
var googleId = null;
var displayName = null;
require('../passport');



authRoutes.get('/',
    passport.authenticate('google', {
            scope:
                ['email', 'profile']
        },
    ));

authRoutes.get('/callback',
    passport.authenticate('google', {
        failureRedirect: '/login/failed',
        successRedirect: 'http://localhost:5000/login/success'
    })
);

authRoutes.get("/failed", (req, res) => {
    res.send("Failed")
});

authRoutes.get("/auth", (req, res) => {
    if(req.session.hasOwnProperty('passport'))
        res.send(req.session.passport.user.id)
    else
        res.send(null)
});
authRoutes.get("/success", (req, res) => {
    res.redirect('http://localhost:5000/create')
    
});

module.exports = {authRoutes,displayName,googleId};