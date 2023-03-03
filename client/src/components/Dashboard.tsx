import styles from '@/styles/Dashboard.module.css'
import Link from 'next/link';
import UpcomingAppt from './UpcomingAppt';



const Dashboard = () => {
    return ( 
        <div className=' mt-[70px]  h-auto w-[83vw] '>
            <div className='py-12 px-8 '>
                <h1 className='text-3xl font-semibold mb-0 '>Book An Appointment</h1>
            <p className='mb-6 text-[1.1rem] '>The best patient appointment booking system.</p>
                <UpcomingAppt />                
            </div>
        </div>
      );
}
 
export default Dashboard;