import styles from '@/styles/Dashboard.module.css'
import Link from 'next/link';
import UpcomingAppt from './UpcomingAppt';



const Dashboard = () => {
    return ( 
        <div className=' mt-[70px]  h-auto w-[83vw] '>
            <div className='py-12 px-8 '>
                <h1 className='text-3xl font-semibold mb-0 '>Book An Appointment</h1>
            <p className='mb-6 text-[1.1rem] '>The best patient appointment booking system.</p>
            <div className='bg-[#fff] rounded-xl p-8 w-[70%]  '>
                <div className='flex flex-row justify-between items-center'>
                    <div>
                        <h3 className='text-2xl font-semibold'>Upcoming Appointments</h3>
                        <p className='text-[#4d4d4d]'>You have 2 appointments already booked</p>
                    </div>
                   <Link href={"/appointment"}><span className='text-lightblue font-bold cursor-pointer focus:underline '>See All</span></Link>

                </div>
                <UpcomingAppt />                
                 </div>
            </div>
        </div>
      );
}
 
export default Dashboard;