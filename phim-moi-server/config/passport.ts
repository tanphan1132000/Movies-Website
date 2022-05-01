import passport from 'passport';
import mongoose from 'mongoose';
import passportLocal from 'passport-local';
import User from '../models/User'

let LocalStrategy = passportLocal.Strategy;

passport.use(new LocalStrategy({
  usernameField: 'user[email]',
  passwordField: 'user[password]'
}, function(email, password, done) {
  User.findOne({email: email}).then(function(user){
    if(!user || !user.validPassword(password)){
      return done(null, false);
    }
    return done(null, user);
  }).catch(done);
}));