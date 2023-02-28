import styles from "../styles/Home.module.css"
import Avatar from "../../public/assets/avatar.jpeg"
import {RiAddFill} from 'react-icons/ri'
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {

    return ( 
        <div className={styles.navbar}>
            <p className="text-[1.3rem] font-semibold mr-8 text-[#3b3b3b] ">Hello Ovie Ighosuakpo</p>
            <Link href="/new">
                <button className="schedule-btn flex flex-row items-center text-[#fff] font-medium text-[.8rem] bg-lightblue p-4 rounded-2xl  hover:drop-shadow-xl " type='button'><span><RiAddFill /></span>Create Appointment</button>
            </Link>
            <div className="img-div w-[3rem] h-[3rem] rounded-[50%] ml-8 ">
                <Image src={Avatar} alt="avatar" className="img w-full h-full object-cover overflow-hidden rounded-[50%] " />
            </div>
        </div>
     );
}
 
export default Navbar;