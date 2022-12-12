const mongoose = require('mongoose');
const Schema =mongoose.Schema;
//  Your code goes here
const marioChar = new Schema({
    name:{type:String,
          required:true,
    },
    weight:{type:Number,
        required:true}
})
const marioModel = mongoose.model("mariochar",marioChar)
module.exports = marioModel;