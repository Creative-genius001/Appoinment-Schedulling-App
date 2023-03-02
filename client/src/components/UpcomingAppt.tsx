import { AppointmentData } from "@/data/appointmentData";

const UpcomingAppt = () => {
    return ( 
        <>
           <div className="w-full h-auto  mt-6">
                {AppointmentData?.map((data, index)=>(
                    <>
                        <div key={index} style={data.isActive ? {borderLeft: "4px solid #1081E8"} : {borderLeft: "4px solid #F85C5D"}} className="card-container flex flex-row justify-between items-center pl-4 rounded-sm mb-4 ">
                            <div className="flex flex-col">
                                <span className="text-lg font-semibold  truncate">{data.name}</span>
                                <span className="text-md font-medium">ID: {data.id}</span>
                            </div>
                            <div className="flex flex-col items-end">
                                <span className="text-sm font-bold text-[#616161] ">{data.time}</span>
                                <span className=" font-medium">{data.date}</span>
                            </div>
                            
                        </div>
                        
                    </>
                ))}
           </div>
        </>
     );
}
 
export default UpcomingAppt;