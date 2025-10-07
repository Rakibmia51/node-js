# EJS (Embedded JavaScript Templates)

🔹 EJS কী?

EJS (Embedded JavaScript) হলো একটি template engine যা দিয়ে আপনি HTML-এর মধ্যে JavaScript কোড embed করতে পারেন।

👉 সহজভাবে বললে,
EJS আপনাকে dynamic HTML page বানাতে সাহায্য করে — যেখানে server-side data ব্যবহার করা যায়।

🔹 কেন EJS ব্যবহার করবেন?

✅ Express-এর সাথে integrate করা খুব সহজ
✅ Dynamic HTML তৈরি করা যায়
✅ Loop, condition, variables ইত্যাদি HTML-এর ভেতরে লিখতে পারেন
✅ Lightweight এবং fast


🔹 EJS Install করা

টার্মিনালে লিখুন 👇

`npm install ejs`


## Contents of EJS
<ol>
    <li>Introduction</li>
    <li>Passing data to ejs file</li>
    <li>It, Else in ejs</li>
    <li>Loop in ejs</li>
    <li>Layout in ejs</li>
</ol>

## How to use EJS
Install:
```
npm install ejs
app.set('view engine', 'ejs');

view -> index.ejs
res.render('index',{});

```

## Step by step
01 Step
```
npm init -y

```

02 Step
```
npm install express ejs

```
03 Step
```
npm install nodemon --save-dev

```
