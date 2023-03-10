import { Request, Response } from "express";
const  {User} = require('../models/user')
import { IUser } from "../types/userTypes";
import { hashPassword, decryptPassword } from "../lib/hashPassword";
import { createToken } from "../lib/jwt";



//get user profile
//http://localhost:5000/profile?id=123
exports.getUser = async (req: Request, res: Response) =>{
    const userId = req.query.id;

    try{
        let user = await User.findOne({_id: userId})
        res.status(200).json(user)
    }
    catch(err){
        res.status(401).send({error: "Could not get User Profile"})
    }
}


//create a new user in database
exports.signup = async (req: Request, res: Response) =>{
    const { firstname, lastname, email, password } = req.body;
    const user: IUser =  new User({
        firstname,
        lastname,
        email,
        password,
        image: null
    })

    //check if user already exits in database
    let userExist =  await User.findOne({email}).exec()
    if(userExist.length === 0 || null){
        try{
        let hash: any = await hashPassword(password);
        user.password = hash;
        await user.save()
        const token = createToken(user._id)
        res.cookie('ckie', token ,{maxAge: 900000, httpOnly: true}) //create cookie for client side auth and session 
        res.status(201).json({
                    id: user._id,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    email: user.email,
                    token: token

                })

    }
    catch(err){
        console.error({error: err})
    }
    }
    else{
        res.status(500).json("User already exist")
    }
}


//login user
exports.login =async (req: Request, res: Response) => {
    const {email, password} = req.body;
    
    //check if user already exist
    const  user: IUser  = await User.findOne({email}).exec()
    if(user == null){
        res.status(500).json("User not found!")
    }
    else{
        try{
            let validate = await decryptPassword(password, user.password);
            if(!validate){
                res.status(500).json("Incorrect email or password")
            }
            else{
                const token = createToken(user._id);
				res.cookie('ckie', token ,{maxAge: 900000, httpOnly: true})
                res.status(200).json({
                    id: user._id,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    email: user.email,
                    token: token

                })
            }
        }catch(err){
            res.status(500).json('Incorrect email or password')
        }
    }
}

//update user profile
exports.updateUser =async (req: Request, res: Response) => {
    const body = req.body;
    const userId = req.params.id;

    try{
            await User.findOneAndUpdate({_id: userId},{
            $set: body
            },
            {new: true}
            )
        res.status(200).json(`User is updated`)
    }catch(err){
        res.status(500).json("Not successful")
        console.error(err)
    }
    
}

//logout user
exports.logout = async(req: Request, res: Response) =>{
    res.clearCookie('ckie');
    
}