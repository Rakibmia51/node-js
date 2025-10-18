const users = require("../models/user.model");


const userRegister = (req, res)=>{
    try {

        // data validation using joi
        // step1: create a schema
        // step2: validate data usnig schema
                const {name, email, password, dob, age, languages, isRegistered} = req.body;
                const newUser = {
                    name,
                    email,
                    password,
                    dob,
                    age,
                    // languages,
                    // isRegistered
                }
                users.push(newUser)
                return res.status(201).json({
                    message: "user was created",
                    newUser,
                })
            
        
    } catch (error) {
        res.status(400).json({
            message: "Not a Create Register Data"
        })
    }
}


const userLogin = (req, res)=>{
    try {

        // data validation using joi
        // step1: create a schema
        // step2: validate data usnig schema
        // errorSchema,
        // registerSchema
        
                const { email, password} = req.body;
                    if(email === "rakibmia@gmail.com" && password === "123456"){
                        return res.status(201).json({
                        message: "user was login",
                    })
                }else{
                    return res.status(201).json({
                    message: "user eamil and password not a match",
                    })
                }
                
            
    } catch (error) {
        res.status(400).json({
            message: "Not a login"
        })
    }
}



module.exports = {userRegister, userLogin}