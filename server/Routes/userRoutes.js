const express = require("express");

const router = express.Router();

const { registerUser,authUser,verifyToken,getUser,getAllUser } = require("../Controller/userController");

const { body, validationResult } = require("express-validator");


// Validation middleware using Express Validator
const validate = [
  body("name").notEmpty(),
  body("email").isEmail(),
  body("phone").isLength({ min: 10 }).withMessage("phone num must be 10"),
  body("password").isLength({ min: 3 }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
router.post("/register", validate, registerUser);

router.post('/login',authUser)

router.get('/user',verifyToken,getUser)
router.get('/',getAllUser)


module.exports = router;
