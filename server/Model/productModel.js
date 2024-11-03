
const mongoose = require('mongoose')


const prodctSchema = new  mongoose.Schema({
    
    name:{type:String, required:true},
    category:{type:String, required:true},
    price:{type:String, required:true},
    brand:{type:String, required:true},
    stock:{type:String, required:true},
    attributes:{type:mongoose.Schema.Types.Mixed}
    
})



const Product =  mongoose.model('Product',prodctSchema)