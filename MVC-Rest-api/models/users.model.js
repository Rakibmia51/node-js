const {v4: uuidv4} = require('uuid')
const users = [
    {
        id: uuidv4(),
        username: "Rakibul Hasan",
        email: "miarakib932@gmail.com"
    },
    {
        id: uuidv4(),
        username: "Hasibur Rahman",
        email: "rakib.it.ergon@gmail.com"
    }
]

module.exports = users;