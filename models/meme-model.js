const mongoose = require('mongoose')
const normalize = require ('normalize-mongoose');

const Schema = mongoose.Schema

var Meme = new Schema(
    {
        name: { type: String, required: true },
        url: {type:String ,require:true},
        caption: {type:String, require:true},
        likes:  { type: Number, min: 0, max: 10000,  default: 0 },

    },
    { timestamps: true },
)
Meme.plugin(normalize);

module.exports = mongoose.model('meme', Meme)