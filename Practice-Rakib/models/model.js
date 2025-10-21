const {v4: uuidv4} = require('uuid')

// Model Data
const users = [
    {
        id: uuidv4(),
        name: "Rakib mia",
        email: "rakib@gmail.com",
        password: "12345"
    },
    {
        id: uuidv4(),
        name: "Sakibul mia",
        email: "sakib@gmail.com",
        password: "123456"
    }
]

module.exports = users;