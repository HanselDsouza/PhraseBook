const mongoose = require('mongoose')
let userSchema=new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
     title:String,
     Display:Array,
     funfact:String,
     value:String,
     title2:String,
     trans:String,
 });
 module.exports = mongoose.model('phrases',userSchema);
                  