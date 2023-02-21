import styles from "../styles/Home.module.css"
import {RiAddFill} from 'react-icons/ri'

const Navbar = () => {

    return ( 
        <div className={styles.navbar}>
            <p className="text-[1.3rem] font-semibold mr-8 text-[#3b3b3b]  ">Hello Ovie Ighosuakpo</p>
            <button className="flex flex-row items-center text-[#fff] font-medium text-[.8rem] bg-lightblue p-4 rounded-2xl  hover:drop-shadow-xl " type='button'><span><RiAddFill /></span>Create Appointment</button>
            <div className="w-[3rem] h-[3rem] bg-darkblue rounded-[50%] ml-8 ">

            </div>
        </div>
     );
}
 
export default Navbar;