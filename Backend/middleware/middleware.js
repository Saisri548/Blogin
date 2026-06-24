import jwt from "jsonwebtoken"
export const AuthMiddleWare=async(req,res,next)=>{
    const token=req.cookies.accessTokens;
    if(!token){
        return res.sendStatus(401);
    }
    jwt.verify(token,process.env.ACCESS_SECRET,(err,user)=>{
        if(err) return res.sendStatus(403)
            req.user=user
        next()
    })

}