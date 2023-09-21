const mongoose = require('mongoose');

const todoSchema =new mongoose.Schema({
     title:{
        type:String,
        required:true,
        maxlength:50
     },
     description:{
        type:String,
        required:true,
        maxlength:200
     },
     createdOn:{
        type:Date,
        default:Date.now()
     },
     updatedOn:{
        type:Date,
        default:Date.now()
     }
})

module.exports = mongoose.model('todo',todoSchema)