import Image from "next/image";
import Link from "next/link";
import frontImage from '../../public/assets/frontimage.jpg';
import doc from '../../public/assets/doc.jpg';
import styles from ".././styles/Login.module.css"


const Login = () => {
   
    return ( 
        <>
        <div className={styles.hero_section}>
            <div className= "hero-img w-[45%] h-[100vh] rounded-lg bg-[white] ">
                <Image alt="frontimage" src={doc} className="img w-[100%] h-[100%] object-contain rounded-lg "/>
            </div>
            <div className="main-container w-[55%] h-[100vh] flex flex-col justify-center items-center bg-[white] ">
                
                <div className="main-container2 w-[50%] mx-auto">
                     <h1 className="font-bold text-[2rem] mb-0 ">Welcome back</h1> 
                    <p className="text-[1rem] text-[#585858] ">Please enter your details to login.</p>  
                <div className="mt-4">
                    <form>
                        <div className="flex flex-col">
                            <label className="text-[.9rem] font-medium mb-1 ">Email</label>
                            <input className={styles.input} placeholder="Enter your email"></input>
                        </div>
                        <div className="flex flex-col mt-3">
                            <label className="text-[.9rem] font-medium mb-1">Password</label>
                            <input className={styles.input} placeholder="Enter your password"></input>
                        </div>
                        <p className="text-[.9rem] mt-4  ">Forgot password? <Link href={"/"}><span className="font-semibold text-lightblue hover:underline  ">Click here</span></Link></p>
                        <button className="button" type="submit">Log in</button>
                        <p className="text-center text-[#585858] mt-4 text-[.9rem] ">Do not have an account? <Link href={"/signup"}><span className="font-semibold text-lightblue hover:underline  ">Sign up</span></Link></p>
                    </form>
                </div>
                </div>  
            </div>
        </div>
        </>
        
     );
}

 
export default Login;