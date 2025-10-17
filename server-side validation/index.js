const { json } = require('body-parser');
const express = require('express');
const userRoutes = require('./routes/user');
const users = require('./models/user.model');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Server is on port http://localhost:${port}`)
})

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api", userRoutes)


app.get('/test', (req, res) => {
  res.send('testing the server')
})

app.get('/api/register', (req, res) => {
  res.status(200).json({users})
})




