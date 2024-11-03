const mongooose = require('mongoose')

const userSchema = new mongooose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    role:{
        type:String,
        default:'user'
    },
    phone:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

const User = mongooose.model('User',userSchema)

module.exports= User

