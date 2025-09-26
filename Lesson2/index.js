const fs = require('fs');

// fs.writeFile('demo1.text', "My Name is Rakibul Hasan", (err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("successful");
//     }
// })


// fs.appendFile('demo1.text', " I am 27 Years Old", (err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("successful");
//     }
// })


// fs.readFile('demo1.text', 'utf-8', (err, data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data);
//     }
// })


// fs.rename('demo1.text', 'demo2.text', (err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("successful");
//     }
// })


// fs.unlink('demo2.text', (err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("successful");
//     }
// })


// fs.exists('demo2.txt', (result)=>{
//     if(result){
//         console.log("found")
//     }else{
//         console.log("not found");
//     }
// })


// ..................................................
// os, path

const os = require("os");
console.log(os.userInfo());
console.log(os.homedir());
console.log(os.hostname());

console.log(os.totalmem());
console.log(os.freemem());

console.log("OS Platform:", os.platform());
console.log("OS Type:", os.type());

// Destruction 
const {totalmem, freemem} = require("os");
console.log(totalmem());
console.log(freemem());

//------------------------------------------------------



//Path Module
console.log(__dirname);
console.log(__filename);

const path = require("path");

const extensionName = path.extname("index.html");
console.log(extensionName);

const joinName = path.join(__dirname + "/../views");
console.log(joinName);