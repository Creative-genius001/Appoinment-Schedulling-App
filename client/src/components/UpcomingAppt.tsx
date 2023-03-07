import { data } from "@/data/appointmentData";
import Image from "next/image";
import Link from 'next/link';
import png1 from '../../public/assets/01.png'
import png3 from '../../public/assets/03.png'


const UpcomingAppt = () => {

    const processDate = (arg : number) => {
        let date = new Date(arg);
        return date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    }

    return ( 
        <>
             <div className='bg-[#fff] flex flex-col  rounded-xl p-4 w-[250px] h-[auto] shadow-xl  '>
                <div className="w-full h-[125px]"> 
                    <Image alt='' src={png1} className='img object-cover w-full h-full'  />
                </div> 
                <div className="w-full h-1/2">
                    <h3 className="text-lg font-bold  ">Upcoming Appointments</h3>
                    <p className="leading-tight text-base ">You have 2 upcoming appointments</p>
                    <button type="button" className="bg-lightblue p-2 mt-3 font-medium text-[white] rounded-lg text-sm w-[90px] " >Open</button>
                </div>           
            </div>
          
        </>
     );
}
 
export default UpcomingAppt;