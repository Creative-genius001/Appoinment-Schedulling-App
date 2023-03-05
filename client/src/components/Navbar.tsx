import styles from "../styles/Home.module.css"
import {useEffect, useState} from 'react'
import Avatar from "../../public/assets/avatar.jpeg"
import {RiAddFill} from 'react-icons/ri'
import Link from "next/link";
import Image from "next/image";
import {BiMenu} from "react-icons/bi"

const Navbar = () => {

    const [active, setActive] = useState<boolean>(false);
    const hamburgerFunction = () => {
        setActive(!active);
    }

    return ( 
        <div className={styles.navbar}>
            <div className=" ">
               <BiMenu onClick={hamburgerFunction} className="hamburger text-lightblue text-[2rem] z-30 cursor-pointer  " />
            </div>
            <div className="flex justify-end items-center ">
                
            <Link href="/new">
                <button className="schedule-btn flex flex-row items-center text-[#fff] font-medium text-[.8rem] bg-lightblue rounded-2xl  hover:drop-shadow-xl " type='button'><span><RiAddFill /></span>Create Appointment</button>
            </Link>
            <div className="img-div w-[3rem] h-[3rem] rounded-[50%] ml-8 ">
                <Image src={Avatar} alt="avatar" className="img w-full h-full object-cover overflow-hidden rounded-[50%] " />
            </div>
            </div>
        </div>
     );
}
 
export default Navbar;