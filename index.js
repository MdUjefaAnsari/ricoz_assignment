require('dotenv').config()
const express = require('express');
const { default: mongoose } = require('mongoose');
const productRoutes = require('./routes/prouctRoute');
const app = express();

app.use(express.json())


app.get('/',(req,res)=>{
        res.send('Hello Welcome to home page')
})

app.use('/',productRoutes)

mongoose.connect(process.env.MONGO_DB)
.then((req,res)=>{
        console.log('MONGODB DATABASE CONNECTED');
        app.listen(3000,()=>{
        console.log("Server is running on port no. 3000");
})
})
.catch((error)=>{
        console.log(error);
})



// mongodb+srv://mdujefaansari:jTwOZSZXnhBWYC8G@cluster0.9wsofjr.mongodb.net/