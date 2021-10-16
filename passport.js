const passport =require("passport")
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
        done(null, user);
});

passport.use(new GoogleStrategy({
        clientID:"332965169213-b6i26eob3o35tjhl74aq5bqp1vehpm78.apps.googleusercontent.com",
        clientSecret:"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",
        callbackURL: "http://localhost:5000/google/callback",
        passReqToCallback   : true
    },
    function(request, accessToken, refreshToken, profile, done) {
            return done(null, profile);
    }
));