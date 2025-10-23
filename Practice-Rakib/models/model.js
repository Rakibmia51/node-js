
const  mongoose  = require("mongoose");

// create users schema
const usersSchema = mongoose.Schema({
    id:{
    type:String,
    required: true
  },
  name:{
    type:String,
    required: [true, "name is required"]
  },
  email:{
    type: String,
    required: [true, "email is required"]
  },
  password:{
    type: Number,
    required: [true, "number is required"]
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
})

// create user model
module.exports =  mongoose.model("User", usersSchema);