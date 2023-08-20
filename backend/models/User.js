import mongoose from "mongoose"


const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        min: 2,
        max: 50
    },
    lastName: {
        type: String,
        required: true,
        min: 2,
        max: 50

    },
    email: {
        type: String,
        required: true,
        max: 50,
        unique: true,

    },
    password: {
        type: String,
        required: true,
        min: 5


    },
    picturePath: {
        type: String,
        default: ""


    },
    friends: {
        type: Array,
        default: []
    },
    location: String,
    occupation: String,
    viewedProfile: Number,
    impressions: Number
 },{timestamps:true}/* It give current time automatically */)
 
 const  User=mongoose.model("User",userSchema)
 
 export default User


//  const user=new mongoose.Schema({
//     s:{

//     }
//  })
//  const user=mongoose.model('user',userSchema)