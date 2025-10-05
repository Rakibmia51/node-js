const express = require('express');
const { getUsers, SaveUsers } = require('../controllers/users.controller');

const router = express.Router();

router.get("/users", getUsers)
router.post("/users", SaveUsers)


module.exports = router;