// config/passport.js
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('../models/User');

passport.use(new LocalStrategy(async (username, password, done) => {
    
    try {
        const user = await User.findOne({ username });

        if (!user) {
            return done(null, false, { message: 'Incorrect username.' });
        }
       
        // Check if the user is verified
        if (user.adminVerification.status !== 'APPROVED') {
            return done(null, false, { message: 'User is not verified by admin.' });
        }

        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) {
            return done(null, false, { message: 'Incorrect password.' });
        }
        console.log(isValidPassword + " ===  ");
        return done(null, user);
    } catch (error) {
        return done(error);
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (error) {
        done(error);
    }
});

module.exports = passport;
