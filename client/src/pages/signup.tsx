import Image from "next/image";
import Link from "next/link";
import frontImage from '../../public/assets/frontimage.jpg';
import styles from ".././styles/Login.module.css"
import Logo from '../../public/assets/Uniben.png';


const Signup = () => {

    return ( 
        <>
        <div className={styles.hero_section}>
            <div className="w-[45%] h-[100vh] p-4 rounded-lg  ">
                <Image alt="frontimage" src={frontImage} className="img w-[100%] h-[100%] object-cover rounded-lg "/>
            </div>
            <div className="w-[55%] h-[100vh] flex flex-col justify-center items-center bg-slate-300">
                
                <div className="w-[50%] mx-auto">
                     <h1 className="font-bold text-[2rem] mb-0 ">Sign Up</h1> 
                    <p className="text-[.9rem] text-[#585858] ">Please register to use the app.</p>  
                <div className="mt-4">
                    <form>
                        <div className="flex flex-col">
                            <label className="text-[.9rem] font-medium mb-1 ">Card ID</label>
                            <input className={styles.input} placeholder="Enter your card id"></input>
                        </div>
                        <div className="flex flex-col mt-3">
                            <label className="text-[.9rem] font-medium mb-1 ">Email</label>
                            <input className={styles.input} placeholder="Enter your email"></input>
                        </div>
                        <div className="flex flex-col mt-3">
                            <label className="text-[.9rem] font-medium mb-1 ">Full name</label>
                            <input className={styles.input} placeholder="Enter your full name"></input>
                        </div>
                        <div className="flex flex-col mt-3">
                            <label className="text-[.9rem] font-medium mb-1">Password</label>
                            <input className={styles.input} placeholder="Enter your password"></input>
                        </div>
        
                        <button className="button" type="submit">Sign up</button>
                        <p className="text-center text-[#585858] mt-4 text-[.9rem] ">Already have an account? <Link href={"/login"}><span className="font-semibold text-[#7F56DA] ">Log in</span></Link></p>
                    </form>
                </div>
                </div>
               
            </div>
        </div>
        </>
     );
}
 
export default Signup;