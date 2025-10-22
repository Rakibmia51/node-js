const router = require("express").Router();

const { 
    AddUsers, 
    deleteUsers, 
    findUsers, 
    updateUser } = require("../controllers/controller");





// post req
router.post('/', AddUsers)

// Update users
router.patch('/:id', updateUser);
// delete users
router.delete('/:id', deleteUsers)
// get api users
router.get('/', findUsers)


module.exports = router;