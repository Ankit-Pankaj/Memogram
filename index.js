const express= require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
// var https = require('https');
const axios=require("axios")
const db = require('./db')
const app=express();
const memeRouter= require("./routes/meme-router");
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

// running on port 3000

    
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
app.use("/memes", memeRouter);



app.listen(3000,(err)=>{
    if(!err){console.log("server started at port 3000");}
    else{
        console.log(err);
    }
})

