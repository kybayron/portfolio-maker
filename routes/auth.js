const express = require('express');
const router = express.Router();
const passport = require('passport');
const cookieSession = require('cookie-session');
require('../passport');

router.use(express.json());
router.use(express.urlencoded({extended: true}));

router.use(cookieSession({
    name: 'google-auth-session',
    keys: ['key1', 'key2']
  }));

router.use(passport.initialize());
router.use(passport.session());

router.get('/',
    passport.authenticate('google', {
            scope:
                ['email', 'profile']
        },
    ));

router.get('/callback',
    passport.authenticate('google', {
        failureRedirect: '/login/failed',
    }),
    function (req, res) {
        res.redirect('/login/success')

    }
);

router.get("/failed", (req, res) => {
    res.send("Failed")
});
router.get("/success", (req, res) => {
    res.send(`Welcome ${req.user.displayName}`)
});

module.exports = router;