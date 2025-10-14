#### 🚀 Node.js + Express.js + MongoDB + EJS Full Project Documentation

A complete beginner-friendly guide and setup for building a **Node.js + Express + MongoDB (Mongoose)** project with **EJS templating**, **CORS**, and **Middleware** support.

---

## 🧭 Table of Contents

1. [Overview](#-overview)
2. [Project Features](#-project-features)
3. [Project Structure](#-project-structure)
4. [Installation Guide](#️-installation-guide)
5. [Run the Server](#-run-the-server)
6. [Core Concepts](#-core-concepts)
   - [Node.js](#1-nodejs)
   - [NPM](#2-npm-node-package-manager)
   - [Modules](#3-modules)
   - [Middleware](#4-middleware)
   - [CORS](#5-cross-origin-resource-sharing)
   - [EJS](#6-ejs)
   - [MongoDB](#7-mongodb)
7. [API Endpoints](#-api-endpoints)
8. [Example User Schema](#-example-user-schema)
9. [Technologies Used](#-technologies-used)
10. [Author](#-author)
11. [License](#-license)

---

## 🧩 Overview

This project demonstrates the integration of:
- **Node.js** for server-side JavaScript  
- **Express.js** for fast web API development  
- **MongoDB** for NoSQL data storage  
- **EJS** for dynamic HTML templating  
- **Middleware** and **CORS** for security and flexibility  

---

## ⚙️ Project Features

✅ RESTful API structure  
✅ Express Middleware support  
✅ MongoDB integration via Mongoose  
✅ Dynamic view rendering with EJS  
✅ Built-in and custom Middleware  
✅ CORS configuration for frontend-backend communication  
✅ CRUD operations with Mongoose models  

---

## 📁 Project Structure

project/
├── node_modules/
├── models/
│ └── User.js
├── routes/
│ └── userRoutes.js
├── views/
│ └── index.ejs
├── public/
│ └── style.css
├── app.js
├── package.json
├── .env
└── README.md


---

## 🧱 Installation Guide

### 1️⃣ Initialize Project
```bash
npm init -y
```
2️⃣ Install Dependencies
```
npm install express mongoose ejs cors body-parser dotenv nodemon
```
▶️ Run the Server

Using Node:
```
node app.js
```
Using Nodemon (auto restart):
```
npx nodemon app.js
```


Server will start on:
👉 http://localhost:3000



## MongoDB Operations
<ul>
   <li>CRUD Operations</li>
   <li>Connect With Node.js</li>
</ul>

---
## Prerequisites
<ul>
   <li>Node.js</li>
   <li>Express.js</li>
   <li>EJS</li>
</ul>

---
## Download and Install mongodb
<ul>
   <li>Mongodb download & install</li>
   <li>Mongodb compass</li>
   <li>mongod --version (mongodb server version)</li>
   <li>mongo --version (mongodb shell version)</li>
</ul>

---
## RDBMS VS mongodb terms
<ul>
   <li>Database = database</li>
   <li>Tables = collections</li>
   <li>Rows = documents</li>
   <li>Columns = fields</li>
</ul>

---

## Mongodb comand line
   - Run the mongoshell - mongo + enter
   - help
   - databases:
      - show dbs
      - create and switch to database: use databaseName
      - check which database you are in : db + enter
      - delete database: db.dropDatabase()
   - collection:
      - show collections
      - db.createCollection(name, option)


## CRUD Operations - insert / create
http://docs.mongodb.com/manual/crud/

#### Database is collection of documents
- Document (row/records)- field and value pair & BSON format
- Collection (table)
- db.collectionName.insertOne()
- db.collectionName.insertMany()
- db.collectionName.insert()

### CRUD | Read documents
-  db.users.find()  সব ডেটা দেখায়
- db.users.find().pretty()  সুন্দর ফরম্যাটে দেখায়
- db.users.find({ age: 25 }) নির্দিষ্ট   শর্ত অনুযায়ী ডেটা খোঁজে
- db.users.findOne({ name: "Rakibul" }) একটিমাত্র ডকুমেন্ট রিটার্ন করে

### CRUD | Update Documents

🔹 Update One
```

db.users.updateOne(
  { name: "Rakibul" },
  { $set: { age: 26 } }
)

```

🔹 Update Many
```

db.users.updateMany(
  { age: { $lt: 30 } },
  { $set: { status: "Active" } }
)

```

### CRUD | Delete Documents
🔸 Delete One

```
db.users.deleteOne({ name: "Sajid" })

````
🔸 Delete Many

```
db.users.deleteMany({ age: { $gt: 25 } })

```

## Install mongodb compass for PC



### Terminal code
<p>npm package install
mongoose</p>

https://mongoosejs.com/docs/

## MongoDB Documentation
https://www.mongodb.com/docs/get-started/?language=nodejs

## mongoose custom schema validation
https://mongoosejs.com/docs/validation.html#custom-validators
example: https://regexr.com/3e48o