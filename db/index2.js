const mongoose = require('mongoose')
require('dotenv').config()

// mongoose
//     .connect('mongodb://127.0.0.1:27017/meme', { useNewUrlParser: true ,useUnifiedTopology: true})
//     .catch(e => {
//         console.error('Connection error', e.message)
//     })

mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true ,useUnifiedTopology: true})
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db