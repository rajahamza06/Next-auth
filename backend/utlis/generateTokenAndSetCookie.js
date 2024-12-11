// import jwt from "jsonwebtoken";
// export const generateTokenAndSetCookie = (res, userId) => {
//     const token = jwt.sign({ userId }, process.env.SECRET_KEY, {
//         expiresIn: "7d",
//     })

//     res.cookie("token", token, {
//         httpOnly: true,
//         maxAge: 7 * 24 * 60 * 60 * 1000,
//         secure: process.env.NODE_ENV === "production", // only send cookie over https
//         sameSite: "strict",
//     });

//     return token;
// }

import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (res, userId) => {
    const SECRET_KEY = process.env.SECRET_KEY || 'fallback_secret_key';

    const token = jwt.sign({ userId }, SECRET_KEY, {
        expiresIn: "7d",
    });

    res.cookie("token", token, {
        httpOnly: true,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
    });

    return token;
};