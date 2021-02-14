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
require('dotenv').config()
// running on port 8081
//--------------------swagger---------------
// swagger--------------------------------
const swaggerJSDoc=require('swagger-jsdoc');
const swaggerUI=require('swagger-ui-express');

const swaggerOptions={
    definition:{
        openapi:'3.0.0',
        info:{
            title:'Meme Management API',
            version:'1.0.0',
            description:'meme Api for meme management',
            contact:{
                name:'Aki',
                email:'ankit.pankaj.1997@gmail.com',
            },
            // servers:["http://localhost:8081"]
        }
    },
    apis:["./routes/meme-router.js"]
}
const swaggerDocs=swaggerJSDoc(swaggerOptions);
app.use('/swagger-ui',swaggerUI.serve,swaggerUI.setup(swaggerDocs));



// -----------------------------------------------
    
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
app.use("/memes", memeRouter);



app.listen(process.env.PORT|8081,(err)=>{
    if(!err){console.log("Backend server started at port 8081");}
    else{
        console.log(err);
    }
})

