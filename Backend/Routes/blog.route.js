import express from "express";
import { getAllBlogs,singleBlog,deletedBlog,updateBlog,createBlog } from "../Controllers/BlogContollers/blog.contoller.js";
import { Router } from "express";
import { authMiddleware } from "../middleware/middleware.js";
const Brouter=express.Router()
Brouter.get("/",getAllBlogs)
Brouter.get("/:id",singleBlog)
Brouter.post("/",authMiddleware,createBlog)
Brouter.put("/:id",authMiddleware,updateBlog)
Brouter.delete("/:id",authMiddleware,deletedBlog)
export default Brouter;

