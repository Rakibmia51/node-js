const  mongoose  = require("mongoose");
const { use } = require("react");

const userSchema = mongoose.Schema({
    id: {
        type: String,
        require: ture
    },
    name: {
       type: String,
       require: true 
    },
     age: {
       type: Number,
       require: true 
    },
      date: {
       type: Date,
       default: Date.now 
    },
});


module.exports = mongoose.model("User", userSchema);
