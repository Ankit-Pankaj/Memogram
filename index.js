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



    // getTodos = async (req, res) => {
    //     await Todo.find({}, (err, todos) => {
    //         if (err) {
    //             return res.status(400).json({ success: false, error: err })
    //         }
    //         if (!todos.length) {
    //             return res
    //                 .status(404)
    //                 .json({ success: false, error: `Item not found` })
    //         }
    //         return res.status(200).json({ success: true, data: todos })
    //     }).catch(err => console.log(err))
    // }
    
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
app.use("/memes", memeRouter);



app.listen(3000,(err)=>{
    if(!err){console.log("server started at port 3000");}
    else{
        console.log(err);
    }
})

// --------------------------------------------------------------------

// createItem = (req, res) => {
  
// }

// getTodos = async (req, res) => {
//     await Todo.find({}, (err, todos) => {
//         if (err) {
//             return res.status(400).json({ success: false, error: err })
//         }
//         if (!todos.length) {
//             return res
//                 .status(404)
//                 .json({ success: false, error: `Item not found` })
//         }
//         return res.status(200).json({ success: true, data: todos })
//     }).catch(err => console.log(err))
// }