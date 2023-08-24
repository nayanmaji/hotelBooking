const express = require('express');
const userSchema = require('../module/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const router = express.Router();

router.post('/login', async (req, res) => {
    const {email,password}=req.body;
    if (!email || !password) {
        return res.status(404).json({error : "fill all details"})
    }
    try {
        let user = await userSchema.findOne({email})
        if (!user) {
            success=false;
            return res.status(404).json({error : "Please enter valid details !"})
        }
        const comparepassword=await bcrypt.compare(password, user.password);
        if (!comparepassword) {
            success=false;
            return res.status(404).json({error : "Please enter valid details !"})
        }
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