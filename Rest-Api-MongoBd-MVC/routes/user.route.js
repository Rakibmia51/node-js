const express = require('express');
const { getAllUsers, getOneUser, createUser } = require('../controllers/users.controller');
const router = express.Router();


router.get("/", getAllUsers)
// router.get("/:id", getOneUser)
router.post("/", createUser)

module.exports = router;