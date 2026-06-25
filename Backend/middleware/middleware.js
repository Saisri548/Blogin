import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  const token = req.cookies.accessToken;
    console.log("COOKIES RECEIVED:", req.cookies);

  if (!token) {
    return res.status(401).json({ message: "No token provided",  cookies: req.cookies });
  }

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};