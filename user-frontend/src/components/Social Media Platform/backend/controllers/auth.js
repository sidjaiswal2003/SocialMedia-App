import bcrypt from "bcrypt"//Encrypt our password

import jwt from "jsonwebtoken"//this give a token for authorization
import User from "../models/User.js"


//Register user//
// export const register = async (req, res) => {
//     try {
//       const {
//         firstName,
//         lastName,
//         email,
//         password,
//         picturePath,
//         friends,
//         location,
//         occupation,
//       } = req.body;
  
//       const salt = await bcrypt.genSalt();
//       const passwordHash = await bcrypt.hash(password, salt);
  
//       const newUser = new User({
//         firstName,
//         lastName,
//         email,
//         password: passwordHash,
//         picturePath,
//         friends,
//         location,
//         occupation,
//         viewedProfile: Math.floor(Math.random() * 10000),
//         impressions: Math.floor(Math.random() * 10000),
//       });
//       const savedUser = await newUser.save();
//       res.status(201).json(savedUser);
//     } catch (err) {
//       res.status(500).json({ error: err.message });
//     }
//   };
  

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
