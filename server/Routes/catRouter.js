const express = require('express')

const router = express.Router()

const{createCategory,getAllCat,deleteCat}= require('../Controller/catController')



router.post('/',createCategory)

router.get('/',getAllCat)

router.delete('/:id',deleteCat)


module.exports = router