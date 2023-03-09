import mongoose from "mongoose";
const { Schema } = mongoose;


const userSchema = new Schema({
    name: String,
    email: String
},
{ timestamps: true}
)
const User = mongoose.model('User', userSchema);

exports.User = User;