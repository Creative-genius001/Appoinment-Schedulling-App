import mongoose, {Schema} from "mongoose"
import { IAppt } from "../types/appointmentType"


const appointmentSchema = new Schema({
    userId : {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
},
    {timestamps: true}
);

const Appointment =  mongoose.model<IAppt>('Appointment', appointmentSchema);


exports.Appointment = Appointment;