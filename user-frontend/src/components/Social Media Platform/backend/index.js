import  express  from "express"
import bodyParser from "body-parser"//Process the request body//gridfs-stream -for file upload
import mongoose, { mongo } from "mongoose"
import cors from "cors"//For cross origin request 
import dotenv from "dotenv"
import multer from "multer" //for file upload locally
import helmet from "helmet"//for request safety
import morgan from "morgan"//for login 
import path from "path" 
import bcrypt from "bcrypt"
import User from "./models/User.js"
//import register from './controllers/auth.js'
import authRoutes from './routes/auth.js'
import userRoutes from './routes/users.js'
import postRoutes from './routes/posts.js'
import createPost from './controllers/posts.js'
import { fileURLToPath } from "url"
import { verifyToken } from "./middleware/auth.js"

//configuration
const __filename=fileURLToPath(import.meta.url)//We using this becoz to use import instead of require  we need this .
const __dirname =path.dirname(__filename)
dotenv.config()
const app= express();
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}))
app.use(morgan("common"))
app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors())
app.use("/assets",express.static(path.join(__dirname,'public/assets')))//This store our image locally.

//File storage//
const storage =multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"public/assets")
    },                              //Any time when user upload the image its going to store in this . file name is public asset.
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})
const upload=multer({storage}) // It help us to store the image.Any time we need to save the file we wll use this variable.

//Routes with file//
app.post("/auth/register",upload.single("picture") ,async (req,res)=>{
    try {
        const {
          firstName,
          lastName,
          email,
          password,
          picturePath,
          friends,
          location,
          occupation,
        } = req.body;
    
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);
    
        const newUser = new User({
          firstName,
          lastName,
          email,
          password: passwordHash,
          picturePath,
          friends,
          location,
          occupation,
          viewedProfile: Math.floor(Math.random() * 10000),
          impressions: Math.floor(Math.random() * 10000),
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    

}) //upload.single("pictue") this is a middleware
app.post('/posts',verifyToken,upload.single("picture"),createPost)

//Routes//
app.use('/auth',authRoutes)
app.use('/users',userRoutes)
app.use('/posts',postRoutes)

//Mongoose setup
const PORT=process.env.PORT || 6000
mongoose.set("strictQuery",false)
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server port ${PORT}`)
    })
}).catch((error)=>{
    console.log(`${error} did not connect `)
})
 

 