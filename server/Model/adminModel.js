const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    session:{
        type:String,
        enum:['editor','admin','superAdmin'],
        default:'admin'
    }


})

const Admin =  mongoose.model('Admin',adminSchema)

module.exports =Admin