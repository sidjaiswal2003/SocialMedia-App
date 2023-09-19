import bcrypt from "bcrypt"//Encrypt our password

import jwt from "jsonwebtoken"//this give a token for authorization
import User from "../models/User.js"
  

//Logging In//
 export const login=async (req,res)=>{
    try {
        const {email,password}=req.body;
         const user=await User.findOne({email:email})//It will find the image that user is trying to specify.
         if(!user){
            res.status(400).json({msg:'User not exist'})
         }
         const isMatch=await bcrypt.compare(password,user.password)//Matching the password 
         if(!isMatch){
            res.status(400).json({msg:'Password is not correct'})
         }
         const token=jwt.sign({id:user._id},process.env.JWT_SECRET)//Create the token
         delete user.password //By this we cant send the password to frontend 
         res.status(200).json({token,user})


    } catch (err) {
        res.status(500).json({error:err.message})
    }
    

}

export default login
