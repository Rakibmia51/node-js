const mongoose = require('mongoose');
// const encrypt = require('mongoose-encryption');


const usersSchema = new mongoose.Schema({
    username: {
        type:String,
        require: true
    },
    email: {
        type:String,
        require: true
    },
     password: {
        type:String,
        require: true
    },
     createdOn: {
        type: Date,
        default: Date.now
    }
})

// Encryption databse - start
// const encKey = process.env.ENC_KEY;
// usersSchema.plugin(encrypt, { 
//     secret: encKey, 
//     encryptedFields: ['password'] });
// // End

module.exports = mongoose.model("user", usersSchema)