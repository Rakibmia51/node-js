const express = require('express');
const router = express.Router();

const { 
        getAllUsers, 
        getOneUsers, 
        createUser, 
        updateUser, 
        deleteUser 
        
    } = require('../controllers/user.controller');



router.get("/", getAllUsers)        // api/users/ : GET
router.get("/:id", getOneUsers)     // api/users/:id : GET
router.post("/", createUser)        // api/users/ : POST
router.patch("/:id", updateUser)    // api/users/:id : PATCH
router.delete("/:id", deleteUser)      // api/users/:id : DELETE


module.exports = router;