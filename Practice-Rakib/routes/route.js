const { AddUsers, deleteUsers, findUsers, updateUser } = require("../controllers/controller");

const router = require("express").Router();



// post req
router.post('/', AddUsers)

// Update users
router.put('/:id', updateUser);
// delete users
router.delete('/:id', deleteUsers)
// get api users
router.get('/', findUsers)


module.exports = router;