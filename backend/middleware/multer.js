// import express from "express"

// import multer from "multer" //for file upload locally
// const app=express();
// const __filename=fileURLToPath(import.meta.url)//We using this becoz to use import instead of require  we need this .
// const __dirname =path.dirname(__filename)
// app.use("/assets",express.static(path.join(__dirname,'public/assets ')))//This store our image locally.

// //File storage//
// const storage =multer.diskStorage({
//     destination:function(req,file,cb){
//         cb(null,"public/assets")
//     },                              //Any time when user upload the image its going to store in this . file name is public asset.
//     filename:function(req,file,cb){
//         cb(null,file.originalname)
//     }
// })
// const upload=multer({storage}) // It help us to store the image.Any time we need to save the file we wll use this variable.
// export default upload