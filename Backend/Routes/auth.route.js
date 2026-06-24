import express from "express";
import { Register,Login,Logout,RefreshToken } from "../Controllers/auth.controller.js";
const router=express.Router()
router.post("/register",Register)
router.post("/login",Login)
router.post("/logout",Logout)
router.post("/refresh",RefreshToken)
export default router;
