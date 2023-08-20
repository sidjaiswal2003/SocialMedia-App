import express from "express"
import { getFeedPosts,getUserPosts,likePost}from '../controllers/posts.js'
import { verifyToken } from "../middleware/auth.js";
const router=express.Router()

//READ//
router.get('/',verifyToken,getFeedPosts)
router.get('/:uderId/posts',verifyToken,getUserPosts)

//UBDATE//
router.patch('/:id/like',verifyToken,likePost)

export default router

