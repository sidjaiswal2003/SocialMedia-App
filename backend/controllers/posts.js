import Post from "../models/Post.js"
import User from "../models/User.js"
//CREATE//
export const createPost=async(req,res)=>{
    try {
         const {userId,description,picturePath}=req.body //Come from body.
         const user=await User.findById(userId)
         const newPost=new Post({
            userId,
            firstName:user.firstName,
            lastName:user.lastName,
            location:user.location,
            description,
            userPicturePath:user.picturePath,
            picturePath,
            like:{},
            comments:[]
         })
        await newPost.save();
        
        const post=await Post.find()//This will return all the post .
        res.status(201).json(post);//Once we save the new post the we need all the post .



        
    } catch (error) {
        res.status(409).json({msg:error.message})
        
    }
}
//READ//
export const getFeedPosts=async(req,res)=>{
    try {
         const post=await Post.find()
         res.status(200).json(post)
       
        
    } catch (error) {
        res.status(404).json({msg:error.message})
        
    }
}
export const getUserPosts=async(req,res)=>{
    console.log("H")
    try {
        const {userId}=req.params //Come from Query string
        const post=await Post.find({userId})
        console.log(post)
        res.status(200).json({post})

    } catch (error) {
        res.status(404).json({msg:error.message})
    }
}

//UBDATE//
export const likePost=async(req,res)=>{
    try {
        const {id}=req.params
        const {userId}=req.body
        const post=await Post.findById(id)
        console.log(post)
        if (!post.likes) {
            post.likes = {[userId]: true}
        } else {
            const isLiked= post.likes.get(userId) //In this we gonna check that ,in likes if that userId exists then its mean like is there.
            if(isLiked){
                post.likes.delete(userId)   //Delete if exitst and check is not.
            }
            else{
                post.likes.set(userId,true)
            }
        }
        const ubdatedPost=await Post.findByIdAndUpdate(id,
            {likes:post.likes},
            {new:true})
        res.status(200).json({ubdatedPost})
    } catch (error) {
        res.status(404).json({msg:error.message})
    }
    
} 
export default createPost



// export const getfeedpost=async (req,res)=>{
//     const post=await Post.find()
// }