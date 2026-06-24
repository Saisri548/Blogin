import jwt from "jsonwebtoken";

// Access token (short lived)
export const generateAccessToken = (user) => {
    return jwt.sign(
        { userId: user.id },
        process.env.ACCESS_SECRET,
        { expiresIn: "15m" }
    );
};

// Refresh token (long lived)
export const generateRefreshToken = (user) => {
    return jwt.sign(
        { userId: user.id },
        process.env.REFRESH_SECRET,
        { expiresIn: "7d" }
    );
};