import styles from '@/styles/Dashboard.module.css'
import Link from 'next/link';
import UpcomingAppt from './UpcomingAppt';
import Image from "next/image";
import png1 from '../../public/assets/01.png'
import png3 from '../../public/assets/03.png'



const Dashboard = () => {
    return ( 
        <div className='dashboard-container mt-[70px] py-8 px-6  h-full w-[83vw] '>
            <h1 className='text-2xl font-semibold mb-2 leading-tight '>Hello, Ovie Ighosuakpo</h1>
            <p className='mb-14 text-[1.1rem] leading-tight'>Welcome to the best patient appointment booking system.</p>
                <div className='card-container w-full flex flex-row justify-evenly '>
                    <div className='card bg-[#fff] flex flex-col  rounded-lg p-4 w-[250px] h-[auto] shadow-xl'>
                        <div className="w-full h-[125px]"> 
                            <Image alt='' src={png1} className='img object-cover w-full h-full'  />
                        </div> 
                        <div className="w-full h-1/2 mt-1">
                            <h3 className="text-lg font-bold   ">Upcoming Appointments</h3>
                            <p className="leading-tight text-base mt-1">You have 2 upcoming appointments</p>
                            <Link href='/appointments'><button type="button" className="bg-lightblue hover:bg-[#4792f5] p-2 mt-3 font-medium text-[white] rounded-lg text-sm w-full " >Open</button></Link>
                        </div>           
                    </div>  

                    <div className='card bg-[#fff] flex flex-col  rounded-lg p-4 w-[250px] h-[auto] shadow-xl'>
                        <div className="w-full h-[125px]"> 
                            <Image alt='' src={png3} className='img object-cover w-full h-full'  />
                        </div> 
                        <div className="w-full h-1/2 mt-1">
                            <h3 className="text-lg font-bold   ">Profile</h3>
                            <p className="leading-tight text-base mt-1">Edit and update your profile details</p>
                            <Link href='/profile'><button type="button" className="bg-lightblue hover:bg-[#4792f5] p-2 mt-3 font-medium text-[white] rounded-lg text-sm w-full " >Edit</button></Link>
                        </div>           
                    </div>  
                </div>           
        </div>
      );
}
 
export default Dashboard;