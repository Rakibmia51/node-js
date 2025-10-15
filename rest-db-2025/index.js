
const app = require('./app');
const config = require('./config/config');


const PORT = config.app.port;


app.listen(PORT, (req, res)=>{
    console.log(`Server is on http://localhost:${PORT}`)
})