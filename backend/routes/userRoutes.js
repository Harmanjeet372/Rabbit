const express = require("express");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const router = express.Router(); // Instance of Router

// @route to handle user registration: POST /api/users/register
// @description: Register a new user
// @access: Public
router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Registration logic
       // res.send({ name, email, password });
       let user=await User.findOne({email});

       if(user) return res.status(400).json({message:"User already exists"});

       user=new User({name,email,password});
       await user.save();

    //    res.send(201).json({
    //     user:{
    //         _id:user._id,
    //         name:user.name,
    //         email:user.email,
    //         role:user.role,
    //     },

    //    });

    //Create JWT Payload
    const payload={user:{id:user._id,role:user.role}};

    //Sign and return the token along with user data (this is second step of payload)
    jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:"40h"},(err,token)=>{
        if (err) {
            console.error("JWT Sign Error:", err);
            return res.status(500).json({ message: "Token generation failed" });
        }    
        //Send the user and token in reponse
        res.status(201).json({
            user:{
                _id:user._id,
                name:user.name,
                email:user.email,
                role:user.role,
            },
            token,
        })
    });
    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error"); // HTTP 500 = Server Error
    }
});

module.exports = router;
