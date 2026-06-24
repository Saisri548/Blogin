import bcrypt from "bcrypt"
import { prisma } from "../prisma/client.js"
import { generateAccessToken,generateRefreshToken } from "./Token.js"
import jwt from "jsonwebtoken"
export const Register=async(req,res)=>{
    const {name,email,password}=req.body
    const hashedPassword=await bcrypt.hash(password,10)
    const user=await prisma.user.create({
        data:{
            name,
            email,
            password:hashedPassword
        }
    })
    res.json(user)

}
export const Login=async(req,res)=>{
    const {email,password}=req.body
    const user=await prisma.user.findUnique({
        where:{email}
    })
    if(!user){
        return res.status(404).json({error: "User not found"})
    }
    const isMatch=await bcrypt.compare(password,user.password)
    if (!isMatch){
    return res.status(401).json({ error: "Invalid password" });
    }
    const accessToken=generateAccessToken(user)
    const refreshToken=generateRefreshToken(user)
    await prisma.user.update({
         where: { id: user.id },
    data: { refreshToken }
    })
res.cookie("accessToken", accessToken, {
  httpOnly: true,
  sameSite: "strict"
});

res.cookie("refreshToken", refreshToken, {
  httpOnly: true,
  sameSite: "strict"
});
  res.json({
    message:"Login Successful",
    user
    
  })
}
export const Logout=async(req,res)=>{
    res.clearCookie("accessToken")
    res.clearCookie("refreshtoken")
    res.json({message:"Logged Out"})
}
export const RefreshToken = async (req, res) => {
    const token = req.cookies.refreshToken;

    if (!token) {
        return res.sendStatus(401);
    }

    let decoded;
    try {
        decoded = jwt.verify(token, process.env.REFRESH_SECRET);
    } catch (err) {
        return res.sendStatus(403);
    }

    const user = await prisma.user.findFirst({
        where: {
            id: decoded.userId,
            refreshToken: token
        }
    });

    if (!user) {
        return res.sendStatus(403);
    }

    const newAccessToken = generateAccessToken(user);

    res.cookie("accessToken", newAccessToken, {
        httpOnly: true,
        sameSite: "strict"
    });

    res.json({ message: "Token refreshed" });
};