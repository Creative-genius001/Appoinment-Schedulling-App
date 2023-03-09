import mongoose, { Schema, Model } from 'mongoose';
import { IUser } from '../types/userTypes';


const userSchema = new Schema({
    firstname: { 
        type: String,
        required: true
    },
    lastname: { 
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: null
    }
},
{ timestamps: true}
)
const User = mongoose.model<IUser>('User', userSchema);

exports.User = User;