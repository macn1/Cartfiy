
const Admin = require('../Model/adminModel')

const jwt = require('jsonwebtoken')


const adminLogin =async(req,res)=>{

    try {

        console.log(req.body);

        const{email,password}= req.body


        const adminExist = await Admin.find({email})

   
        const name= adminExist[0].name
     

        if(!adminExist){
            res.status(401).json({message:'admin doesnt exist'})
        }

        const token = jwt.sign({id:adminExist[0].id},process.env.JWT_SECRET,{expiresIn:'30d'})

        res.status(201).json({status:'true',token:token ,name:name})

        
    } catch (error) {

        res.status(400).json({error:error.message})
        
    }
}


module.exports = {adminLogin}