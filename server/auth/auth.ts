import { decodeToken } from "../lib/jwt";
import { Request, Response, NextFunction } from "express";


/** auth middleware */
export default async function Auth(req: Request, res: Response, next: NextFunction){
    try {
        
        // access cookie to validate request
        const token: string = req.cookies.ckie;
        const decodedToken = await decodeToken(token);

        if (decodedToken){
            next()
        }
        else{
            res.status(401).json({error: "token is invalid"})
        }

        // req.user = decodedToken;

    } catch (error) {
        res.status(401).json({ error : "Authentication Failed!"})
    }
}