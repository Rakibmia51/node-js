const express = require('express')
const userRouter = require('./routes/route')
const users = require('./models/user.model')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/api",userRouter);

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server is on port http://localhost:${port}`)
})

// get api/register - (name, email, password)
app.get('/api/register', (req, res) => {
  res.status(200).json(users)
})



