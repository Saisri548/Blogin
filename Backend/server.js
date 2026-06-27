import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import router from "./Routes/auth.route.js"
import Brouter from "./Routes/blog.route.js"
const app=express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({origin:"http://localhost:5173",
    credentials:true
}))
app.use("/api/auth",router)
app.use("/api/blog",Brouter)

app.listen(5000,()=>{
    console.log(`server running  http://localhost:5000`)
})