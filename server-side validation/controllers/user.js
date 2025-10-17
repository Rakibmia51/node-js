const users = require("../models/user.model");

// User Registration 
const registerUser = async (req, res)=>{
    try {
        const {name, email, password, dob} = req.body;
        const newUser = {
            name, 
            email, 
            password, 
            dob
        }
        users .push(newUser);
        return res.status(201).json({
            message: "User was created",
            newUser
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}


// User Login
const loginUser = (req, res)=>{
    try {
        const { email, password} = req.body;
            if(email === 'rakibmia@gmail.com' && password === '12345')
                {
                    return res.status(201).json({
                        message: "User was Loggedin",
                        
                    })
                }else{
                     return res.status(400).json({
                        message: "email and password not match",
                        
                    })
                }
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

module.exports = {registerUser, loginUser};