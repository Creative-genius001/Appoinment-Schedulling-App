import { data } from "@/data/appointmentData";
import Link from 'next/link';

const UpcomingAppt = () => {

    const processDate = (arg : number) => {
        let date = new Date(arg);
        return date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    }

    return ( 
        <>
             <div className='bg-[#fff] rounded-xl p-8 w-[70%] shadow-xl  '>
                <div className='flex flex-row justify-between items-center'>
                    <div>
                        <h3 className='text-2xl font-semibold'>Upcoming Appointments</h3>
                        <p className='text-[#4d4d4d]'>You have 2 appointments already booked</p>
                    </div>
                   <Link href={"/appointments"}><span className='text-lightblue font-bold cursor-pointer focus:underline '>See All</span></Link>

                </div>
                 <div className="w-full h-auto  mt-6  ">
                {data?.map((data, index)=>(
                    
                    <>
                        <div key={index} style={data.status ? {borderLeft: "4px solid #1081E8"} : {borderLeft: "4px solid #F85C5D"}} className="card-container flex flex-row justify-between items-center pl-4 rounded-sm mb-4 ">
                            <div className="flex flex-col">
                                <span className="text-lg font-semibold  truncate">{data.name}</span>
                                <span className="text-md font-medium">ID: {data.id}</span>
                            </div>
                            <div className="flex flex-col items-end">
                                <span className="text-sm font-bold text-[#616161] ">{processDate(data.time)}</span>
                                <span className=" font-medium">{data.date.toLocaleDateString()}</span>
                            </div>
                            
                        </div>
                        
                    </>
                ))}
             </div>                
            </div>
          
        </>
     );
}
 
export default UpcomingAppt;