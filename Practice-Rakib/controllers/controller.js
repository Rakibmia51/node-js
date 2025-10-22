let User = require('../models/model');
const {v4: uuidv4} = require("uuid")


// Create User
const AddUsers = async (req, res)=>{
    try {
            const newUser = new User ({
                id: uuidv4(), 
                name: req.body.name,
                email: req.body.email,
                password: Number(req.body.password)
            })
             await newUser.save();
             res.status(201).send(newUser)

    } catch (error) {
            res.status(404).send(error.message)
    }
}

// Update user
const updateUser = async (req, res)=>{
   
    // const user = await User.updateOne({id: req.params.id});

    // user.name = req.body.name;
    // user.email= req.body.email;
    // user.password= Number(req.body.email);
    // await user.save();
    // res.status(200).json(user);

        try {
            const id = req.params.id;
            const updateUser = await User
            .findByIdAndUpdate(
            //  .updateOne(
            {id: id}, {
            $set:{
                name : req.body.name,
                email : req.body.email,
                password : req.body.password,
            }
            },
            {new: true}
            )
            if(User){

            res.status(200).send({
                success: true,
                message: "Updated single users",
                data: updateUser
            });

            }else{
            res.status(404).send({
                success: false,
                message: "User was not Updated with this id"
            });
            }

        } catch (error) {
            res.status(500).send({
            message: error.message})
        }

}

// Delete User
const deleteUsers = async (req, res)=>{
   try {

     await User.deleteOne({id: req.params.id})
      res.status(200).json({
        message: 'Deleted user'
      });

   } catch (error) {
        res.status(500).send(error.message);
   }
}

// get all Users
const findUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(201).json(users)
  } catch (error) {
     res.status(500).send(error.message);
  }
}


module.exports = {AddUsers, deleteUsers, findUsers, updateUser}