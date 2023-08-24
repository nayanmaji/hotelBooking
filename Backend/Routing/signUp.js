const express = require('express');
const userSchema = require('../module/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const router = express.Router();


router.post('/signup', async (req, res) => {
    const {name,email,password,cpassword}=req.body;
    if (!name || !email || !password || !cpassword) {
        success=false;
        return res.status(404).json({error : "fill all details"})
    }
    try {
        let user = await userSchema.findOne({email:req.body.email})
        if (user) {
            success=false;
            return res.status(404).json({error : "That email address is already registered. You sure you don\'t have an account?"})
        }
        if (password!==cpassword) {
            success=false;
            return res.status(404).json({error : "enter comferm password and password to be same "})
        }
        const salt = bcrypt.genSaltSync(10);
        const passwordHash = bcrypt.hashSync(req.body.password, salt);
        const cpasswordHash = bcrypt.hashSync(req.body.cpassword, salt);

        user = await userSchema.create({
            name : req.body.name,
            email : req.body.email,
            password : passwordHash,
            cpassword : cpasswordHash
        })
        const data = {
            user:{
                id:user.id
            }
        }
        const token = jwt.sign(data,process.env.JWT_SECRET);
        success=true;
        res.status(200).json({success,token})
    } catch (error) {
        return res.status(404).json({error:"Some internal server error !"})
        
    }
  })
  module.exports = router;