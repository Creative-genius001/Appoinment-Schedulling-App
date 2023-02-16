import styles from '@/styles/Dashboard.module.css'
import Link from 'next/link';
import AppointmentCard from './AppointmentCard';



const Dashboard = () => {
    return ( 
        <div className=' mt-[70px] py-12 px-8  h-auto w-[83vw]'>
            <div className='bg-[#fff] rounded-xl p-8 w-[70%]  '>
                <div className='flex flex-row justify-between items-center'>
                    <div>
                        <h3 className='text-2xl font-bold'>Upcoming Appointments</h3>
                        <p className='text-[#4d4d4d]'>You have 2 appointments already booked</p>
                    </div>
                   <Link href={"/appointment"}><span className='text-darkpurple font-bold cursor-pointer '>See All</span></Link>

                </div>
                <AppointmentCard />
            </div>
        </div>
      );
}
 
export default Dashboard;