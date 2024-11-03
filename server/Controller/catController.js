const catModel = require('../Model/categoryModel')

const { ObjectId } = require('mongodb');



const path = require('path');
const multer = require('multer');

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/'); // Path to save the uploaded image
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Save with unique filename
    }
});

const upload = multer({ storage: storage }).single('image');

// Create Category with Image
const createCategory = async (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        try {
            const { category, sub } = req.body;
            const imagePath = req.file ? req.file.path : null; // Image path from multer

            // Create a new category object
            const newCat = new catModel({ category, sub, image: imagePath });

            await newCat.save();

            res.status(201).json({
                status: true,
                category: newCat,
                message: "Category created successfully"
            });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });
};

const getAllCat = async(req,res)=>{
    try {
        

        const data = await catModel.aggregate([
            {
                $group:{
                    _id:"$category",
                    items:{
                        $push:{ _id:'$_id',sub:'$sub',image:'$image'}
                    }
                }
            }
        ])
        res.status(200).json({staus:'true',data:data})
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteCat =async(req,res)=>{
    try {

        const id = req.params.id
        
        const deleteCat = await catModel.findByIdAndDelete(id).then((res)=>{console.log(res,"dsdsd");
        })

        res.status(200).json({message:"cat deleted"})
        
    } catch (error) {

        console.log(error);
        
        
    }
}
module.exports = { createCategory,getAllCat,deleteCat };
