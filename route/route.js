const express = require("express");
const router = express.Router();

const User = require("../model/user");

const {login, signup} = require("../controller/auth");
const {auth, isStudent,isAdmin} = require("../middleware/authmid");

router.post("/login", login);
router.post("/signup", signup);



//Protected Route
router.get("/student", auth, isStudent, (req,res) => {
    res.json({
        success:true,
        message:'Welcome to the Protected route for Students',
    });
} );

router.get("/admin", auth, isAdmin, (req,res) => {
    res.json({
        success:true,
        message:'Welcome to the Protected route for Admin',
    });
});




module.exports = router;