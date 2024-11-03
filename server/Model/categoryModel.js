

const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({

    category:{
        type:String,
        required:true
    },
    sub:{
        type:String,
        required:true
    },
    image: {
        type: String, // Store image path as a string
        required: false // Image is optional
    }

})

const Category = mongoose.model('Category',categorySchema)


module.exports =Category
