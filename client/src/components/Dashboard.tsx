import styles from '@/styles/Dashboard.module.css'
import Link from 'next/link';
import UpcomingAppt from './UpcomingAppt';



const Dashboard = () => {
    return ( 
        <div className=' mt-[70px]  h-auto w-[83vw] '>
            <div className='py-8 px-6 '>
                <h1 className='text-3xl font-semibold mb-2 leading-tight '>Hello, Ovie Ighosuakpo</h1>
            <p className='mb-6 text-[1.1rem] leading-tight'>Welcome to the best patient appointment booking system.</p>
                <UpcomingAppt />                
            </div>
        </div>
      );
}
 
export default Dashboard;