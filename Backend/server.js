import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import router from "./Routes/auth.route.js"
const app=express()
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true
}))
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",router)
app.listen(5000,()=>{
    console.log(`server running  http://localhost:5000`)
})