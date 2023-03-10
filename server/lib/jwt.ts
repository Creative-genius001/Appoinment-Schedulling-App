const jwt = require('jsonwebtoken')
import { JWT_SECRET_KEY } from "../config"

export const createToken = (id : string) => {
    return jwt.sign(
        {id},
        JWT_SECRET_KEY,
        {
            expiresIn: 3 * 24 * 60 * 60
        },
    );
}

export const decodeToken = async (token: string) => {
    return await jwt.verify(token, JWT_SECRET_KEY);
}