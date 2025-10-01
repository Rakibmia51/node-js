const express = require('express');

const userRouter = require('./routes/users.route');
const productRouter = require('./routes/products.route');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended:true}))
app.use(userRouter);
app.use(productRouter);

app.use((req, res, next)=>{
    res.status(404).json({
        message: "resource not found",
    });
});


app.listen(PORT, ()=>{
    console.log(`server is running http://localhost:${PORT}`)
})


                                //--View--//
// View http request -----------> Router -> Controller -> Model -> Database
// -http://localhost:3000/users


// MVC Architecture (Model-View-Controller)

/* 🏗️ MVC Architecture কী?
 MVC (Model–View–Controller) হলো একটি সফটওয়্যার আর্কিটেকচার প্যাটার্ন,
 যেটা মূলত ওয়েব ও ডেস্কটপ অ্যাপ্লিকেশনে কোডকে আলাদা আলাদা ভাগে ভাগ 
 করে ব্যবস্থাপনা করতে ব্যবহৃত হয়।

👉 এর মূল উদ্দেশ্য হলো:
Separation of Concerns (দায়িত্ব ভাগ করা)
কোড মেইনটেন করা সহজ করা
স্কেলেবল অ্যাপ্লিকেশন বানানো 

🔄 কাজের ধাপ (Flow)

1. User Request পাঠায় (Browser → Controller)। 
2. Controller Model কে কল করে (ডেটা আনে/আপডেট করে)।
3. Model থেকে ডেটা আসে Controller এর কাছে।
4. Controller সেই ডেটা View এ পাঠায়।
5. View ইউজারকে Response দেখায়। 


project/
│── index.js          # main entry point
│── routes/
│     └── userRoutes.js
│── controllers/
│     └── userController.js
│── models/
│     └── User.js
│── views/
│     └── user.ejs


*/
