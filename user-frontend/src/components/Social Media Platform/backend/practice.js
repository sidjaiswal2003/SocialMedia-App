import express from "express"
import mongoose from "mongoose"
const app=express()

app.get('/',(req,res)=>{
    res.send('Hello')
})
mongoose.set('strictQuery',false)
mongoose.connect("mongodb+srv://sid:sidd1234@cluster0.u9ox7ut.mongodb.net/",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    app.listen(8080,()=>{
        console.log("mongo0 on")
    })
}).catch((error)=>{
    console.log(error)
})

