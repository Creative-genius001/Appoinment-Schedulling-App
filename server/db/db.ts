import mongoose from "mongoose";

class ConnectDB {
   public static CONNECTDB =  (url:any) => {
     mongoose.set('strictQuery', false);
     mongoose.connect(url).then(()=> console.log('database connected ✨✨')
     ).catch((err)=> console.log(err)
     )
    }
}
export const {CONNECTDB} = ConnectDB;