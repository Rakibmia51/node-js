
require("dotenv").config();
const passport = require("passport")
const bcrypt = require("bcrypt")
const User = require("../models/user.model");

const GoogleStrategy = require('passport-google-oauth20').Strategy;



// passport.use(new GoogleStrategy({
//     clientID: process.env.GOOGLE_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     callbackURL: "http://localhost:5000/auth/google/callback"
//   },
//   function(accessToken, refreshToken, profile, cb) {

//     // User.findOrCreate({ googleId: profile.id }, function (err, user) {
//     //   return cb(err, user);
//     // });

    
//     User.findOne({ googleId: profile.id}, (err, user) => {
//         if(err) return cb(err, null);

//     // not a user; so create a new user with new google id    
//         if(!user){
//             let newUser = new User({
//                 googleId: profile.id,
//                 username: profile.displayName,
//             });
//             newUser.save();
//             return cb(null, newUser);
//         }else {
//     // if we find an user just return return user
//             return cb(null, user);
//         }
//     })



//   }
// ));


passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // পুরনো ইউজার খুঁজে বের করা
        let user = await User.findOne({ googleId: profile.id });

        // না থাকলে নতুন ইউজার তৈরি করা
        if (!user) {
          user = new User({
            googleId: profile.id,
            username: profile.displayName,
          });
          await user.save();
        }

        // সফল হলে user রিটার্ন
        return done(null, user);
      } catch (err) {
        return done(err, null);
      }
    }
  )
);





// create session id
// whenever we login it creares user id inside session
passport.serializeUser((user, done)=>{
    done(null, user.id);
});

// find session info using session id
passport.deserializeUser(async (id, done)=>{
    try {
        const user = await User.findById(id);
        done(null, user)
    } catch (error) {
        done(error, false)
    }
})