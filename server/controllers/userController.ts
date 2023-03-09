import { Request, Response } from "express";

exports.getUsers = (req: Request, res: Response) =>{
    let user: string = "Chris"
    res.json(user)
}