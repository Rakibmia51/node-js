let users = require('../models/model');
const {v4: uuidv4} = require('uuid');


// Create User
const AddUsers = (req, res)=>{
   try {
        const { name, email, password} = req.body;
        const newUser = {
            id: uuidv4(),
            name,
            email,
            password
        }
        users.push(newUser);
        res.status(201).json({
            message: " Register done",
            newUser
        })
   } catch (error) {
        res.status(404).json({
            message: "Not Register",
        })
   }
}
// Update user

const updateUser = (req, res)=>{
    const id = req.params.id;
    const { name, email, password} = req.body;

    users
    .filter((user)=>user.id == id)
    .map((selectUser)=>{
        selectUser.name = name;
        selectUser.email = email;
        selectUser.password = password;
    })
    res.status(200).json(users);
}

// Delete User
const deleteUsers = (req, res)=>{
   const id = req.params.id;
      users =  users.filter((user)=>user.id !== id);
      res.status(200).json(users);
}

// get Users
const findUsers = (req, res) => {
  res.status(201).json({
            message: " Users List",
            users
        })
}


module.exports = {AddUsers, deleteUsers, findUsers, updateUser}