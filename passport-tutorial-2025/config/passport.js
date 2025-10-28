
const passport = require("passport")
const bcrypt = require("bcrypt")
const LocalStrategy = require("passport-local");
const User = require("../models/user.model");

passport.use(
    new LocalStrategy( async (username, password, done) => {
        try {
            const user = await User.findOne({username: username})
            if (!user) { 
                return done(null, false),{message: "Incorrect Username"} 
                }
                
            if(!bcrypt.compareSync(password, user.password)){
                return done(null, false,{message: "Incorrect Password"}) 
            }


             // পাসওয়ার্ড তুলনা (সঠিকভাবে await সহ)

            // const isMatch = await bcrypt.compare(password, user.password);
            // if (!isMatch) {
            //     return done(null, false, { message: "Incorrect Password" });
            // }


            return done(null, user);
            } catch (error) {
            return done(error);
        }
  }
));

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