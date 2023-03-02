import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Link from 'next/link';
import styles from "@/styles/Login.module.css"
import {MdModeEditOutline} from 'react-icons/md'
// import styles from '@/styles/Home.module.css'
import Image from 'next/image';
import Avatar from "../../public/assets/avatar.jpeg"

const Profile = () => {
    return ( 
        <>
       
        <div className=' mt-[70px] bg-[#ffffff] py-12 px-8 h-auto w-[83vw]'>
            <h2 className='text-3xl font-bold mb-8'>Update your Profile</h2>
            
            <div className='relative flex justify-start items-start h-auto w-full '>
                 <div className='bg-[white] w-1/3 '>
                <div className='profile-pic w-[180px] h-[180px] rounded-[50%] '>
                     <Image src={Avatar} alt="avatar" className="img w-full h-full object-cover overflow-hidden rounded-[50%] " />
                </div>
                <div className='absolute top-[140px] left-[130px] hover:drop-shadow-xl bg-lightblue w-8 h-8 rounded-[50%] flex justify-center items-center cursor-pointer'>
                    <MdModeEditOutline className='text-[white]' />
                </div>
                
            </div>
            <div className='profile-container ml-8 rounded-xl px-8 w-[40%] '>
                
                 <form className=''>
                        <div className="flex flex-col">
                            <label className="text-[.9rem] font-medium mb-1 ">Card ID</label>
                            <input className={styles.input} value="12KZ768IK" placeholder="Enter your card id"></input>
                        </div>
                        <div className="flex flex-col mt-3">
                            <label className="text-[.9rem] font-medium mb-1 ">Email</label>
                            <input className={styles.input} value="chris@gmail.com" placeholder="Enter your email"></input>
                        </div>
                        <div className="flex flex-col mt-3">
                            <label className="text-[.9rem] font-medium mb-1 ">Full name</label>
                            <input className={styles.input} value="Ovie Ighosuakpo" placeholder="Enter your full name"></input>
                        </div>
        
                        <button className="button " type="submit">Update</button>
                    </form>
            </div>
            </div>
           
        </div>      
        </>
     );
}
 
export default Profile;