import { Request, Response } from "express";
const  {User} = require('../models/user')
import { IUser } from "../types/userTypes";

exports.getUsers = async (req: Request, res: Response) =>{
    let user = await User.find()
    res.json(user)
}


//create a user in database
exports.createUser = async (req: Request, res: Response) =>{
    const { firstname, lastname, email, password } = req.body;
    const user: IUser =  new User({
        firstname,
        lastname,
        email,
        password,
        image: null
    })
    try{
        await user.save()
        res.status(201).json(user)
    }
    catch(err){
        console.error({error: err})
    }
}

exports.updateUser =async (req: Request, res: Response) => {
    const {firstname, lastname, email, image} = req.body;
    const userId = req.params.id;

    try{
        const searchUser: IUser = await User.findOneAndUpdate({_id: userId},{
            $set: {
                firstname,
                lastname,
                email,
                image,
            }
            },
            {new: true}
            )
        res.status(200).json(`User ${firstname} is updated`)
    }catch(err){
        res.status(500).json("Not successful")
        console.error(err)
    }
    
}