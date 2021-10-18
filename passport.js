const passport =require("passport")
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const Users = require('./models/userModel');

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
        done(null, user);
});

passport.use(new GoogleStrategy({
        clientID:"332965169213-b6i26eob3o35tjhl74aq5bqp1vehpm78.apps.googleusercontent.com",
        clientSecret:"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",
        callbackURL: "http://localhost:5000/login/callback",
        passReqToCallback   : true
    },
    function(request, accessToken, refreshToken, profile, done) {
        console.log(profile.displayName)
        Users.findOne({
                googleId: profile.id
        }, function(err,user){
                if(err){
                        return done(err);
                }
                if(!user){
                        user = new Users({
                                fullName: profile.displayName,
                                googleId: profile.id
                        });
                user.save(function(err){
                        if (err) console.log(err);
                        return done(err,profile);
                });       
                } else {
                        return done(err,profile);
                }
        });   
            
    }
));