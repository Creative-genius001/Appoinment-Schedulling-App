import { Request, Response } from "express";
const  {User} = require('../models/user')

exports.getUsers = async (req: Request, res: Response) =>{
    let user = await User.find()
    res.json(user)
}

exports.createUser = async (req: Request, res: Response) =>{
    let user =  new User({
        name: "jason",
        email: "jason2gmail.com"
    })
    try{
        await user.save()
        res.status(201).json(user)
    }
    catch(err){
        console.error("error")
    }
}