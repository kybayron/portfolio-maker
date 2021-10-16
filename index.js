const express = require('express');
const usersRoutes = require('./routes/users.js'); 
const portfolioRoutes = require('./routes/portfolio.js'); 
const mongoose = require('mongoose');
const app = express();
const PORT = 5000;
const passport = require('passport');
const cookieSession = require('cookie-session');
require('./passport');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cookieSession({
    name: 'google-auth-session',
    keys: ['key1', 'key2']
  }));

app.use(passport.initialize());
app.use(passport.session());

app.listen(PORT, () => console.log(`Server Running on port http://localhost:${PORT}`));

app.get('/', (req,res) => {
    res.send("HOME PAGE");
});

mongoose.connect('mongodb+srv://cadetship:Blue%40123%21@cluster0.rceks.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', () => console.log('connected to DB!'));

app.use('/users', usersRoutes);
app.use('/portfolio',portfolioRoutes);

app.get("/failed", (req, res) => {
    res.send("Failed")
});
app.get("/success", (req, res) => {
    res.send(`Welcome ${req.user.email}`)
});

app.get('/google',
    passport.authenticate('google', {
            scope:
                ['email', 'profile']
        }
    ));

app.get('/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/failed',
    }),
    function (req, res) {
        console.log(res.body)
        res.redirect('/success')

    }
);

