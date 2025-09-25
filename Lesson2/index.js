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


fs.exists('demo2.txt', (result)=>{
    if(result){
        console.log("found")
    }else{
        console.log("not found");
    }
})