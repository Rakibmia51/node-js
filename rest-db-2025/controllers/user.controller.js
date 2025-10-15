const {v4: uuidv4} = require("uuid")
const User = require("../models/user.model")



// api/users: GET - AllUsers
const getAllUsers = async (req, res)=>{
    try {
        const users = await User.find();
        res.status(200).json(users)
    } catch (error) {
        res.status(500).send(error.message);
    }
}
// api/users/:id : GET
const getOneUsers = async (req, res)=>{
    try {
        const user = await User.findOne({
        id: req.params.id
        })
        res.status(200).json(user)
    } catch (error) {
        res.status(500).send(error.message);
    }
}


// api/users/ : POST
const createUser = async (req, res)=>{

   try {
        const newUser = new User({
            id: uuidv4(), 
            name: req.body.name,
            age: Number(req.body.age)
        })
        await newUser.save();
        res.status(201).json(newUser);
   } catch (error) {
        res.status(500).send(error.message);
   }
}

// api/users/:id : PATCH
const updateUser = async (req, res)=>{
    const user = await User.findOne({id: req.params.id});
    user.name = req.body.name;
    user.age = Number(req.body.age);
    await user.save();
    res.status(200).json(user);
}

// api/users/:id : DELETE
const deleteUser = async (req, res)=>{
     try {
        await User.deleteOne({
        id: req.params.id,
        })
        res.status(200).json({
            message: 'Deleted user'
        })
     } catch (error) {
        res.status(500).send(error.message);
     }
}
module.exports = {getAllUsers, getOneUsers, createUser, updateUser, deleteUser};