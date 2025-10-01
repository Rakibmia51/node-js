const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended:true}))

const users = [
    {
        name: "Rakibul Hasan",
        age: 27
    },
    {
        name: "Sakibul Hasan",
        age: 22
    }
]

const htmlForm = `
    <form method="POST" action ="/users">
        <input type="text" name ="name" placeholder="Enter Name"/>

        <input type="number" name ="age" placeholder="Enter age"/>

        <button type="submit">Save user</button>

    </form>
`

app.get("/users", (req, res)=>{
   res.send(htmlForm)
})

app.post("/users", (req, res)=>{
    // res.send(htmlForm)

    const name = req.body.name;
   const age = Number(req.body.age);
   const user = {
    name,
    age
   }
   users.push(user)
   res.status(201).json({
    success: true,
    users
   })
})

app.listen(PORT, ()=>{
    console.log(`server is running http://localhost:${PORT}`)
})