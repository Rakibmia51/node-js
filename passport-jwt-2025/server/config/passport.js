require("dotenv").config()
const User = require("../models/user.model")
const passport = require("passport")
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET_KEY;

passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
        // Use _id because Mongo default id is _id
        const user = await User.findOne({ _id: jwt_payload.id });
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    } catch (err) {
        return done(err, false);
    }
}));
