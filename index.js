const express = require('express');
const usersRoutes = require('./routes/users.js'); 
const portfolioRoutes = require('./routes/portfolio.js'); 
const {authRoutes, displayName} = require('./routes/auth.js');
const mongoose = require('mongoose');
const app = express();
const PORT = 5000;
const passport = require('passport');
//const cookieSession = require('cookie-session');
const session = require('express-session'); 

app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'cadetship2021'}));

app.use(passport.initialize());
app.use(passport.session());

app.listen(PORT, () => console.log(`Server Running on port http://localhost:${PORT}`));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.connect('mongodb+srv://cadetship:Blue%40123%21@cluster0.rceks.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', () => console.log('connected to DB!'));

app.get('/', (req,res) => {
    console.log(req.session);
    res.send(`${req.session.passport.user.displayName}`);
});

app.use('/users', usersRoutes);
app.use('/portfolio',portfolioRoutes);
app.use('/login',authRoutes);



