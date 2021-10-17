const express = require('express');
const authRoutes = express.Router();
const passport = require('passport');
const cookieSession = require('cookie-session');

var googleId = null;
var displayName = null;

require('../passport');

authRoutes.use(cookieSession({
    name: 'google-auth-session',
    keys: ['key1', 'key2']
  }));

authRoutes.use(passport.initialize());
authRoutes.use(passport.session());

authRoutes.get('/',
    passport.authenticate('google', {
            scope:
                ['email', 'profile']
        },
    ));

authRoutes.get('/callback',
    passport.authenticate('google', {
        failureRedirect: '/login/failed',
    }),
    function (req, res) {
        res.redirect('/login/success')

    }
);

authRoutes.get("/failed", (req, res) => {
    res.send("Failed")
});
authRoutes.get("/success", (req, res) => {
     res.send(`Welcome ${req.user.displayName}`)
     displayName = req.user.displayName
     googleId = req.user.id
});

module.exports = {authRoutes,displayName,googleId};