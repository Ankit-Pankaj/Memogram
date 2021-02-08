const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Meme = new Schema(
    {
        name: { type: String, required: true },
        url: {type:String ,require:true},
        caption: {type:String, require:true},

    },
    { timestamps: true },
)

module.exports = mongoose.model('meme', Meme)