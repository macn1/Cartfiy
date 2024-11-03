const mongoose = require('mongoose')
// require('dotenv').config()
// console.log(process.env.CONN_STR);

const mongoDb = ()=>{

    mongoose.connect(process.env.CONN_STR).then(()=>{
        console.log("db connected succesfully");
    }).catch(()=>{
        console.log("db connection failed");
    })

}
module.exports= mongoDb