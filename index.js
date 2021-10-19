const express = require('express');
const usersRoutes = require('./routes/users.js'); 
const portfolioRoutes = require('./routes/portfolio.js'); 
const {authRoutes, displayName} = require('./routes/auth.js');
const passport = require('passport');
const history = require('connect-history-api-fallback');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session'); 

const PORT = 5000;
const app = express();
const path = __dirname + '/dist/';

app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'cadetship2021',
    cookie: {secure: false}
  }));

app.use(passport.initialize());
app.use(passport.session());

app.listen(PORT, () => console.log(`Server Running on port http://localhost:${PORT}`));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));

app.use('/api/users', usersRoutes);
app.use('/api/portfolio',portfolioRoutes);
app.use('/login',authRoutes);

app.use(history());
app.use(express.static(path));
app.get('/', (req,res) => {
    console.log(req.session);
    res.sendFile(path + "index.html");
});
