import Calendar from "@/components/Calendar";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import styles from "@/styles/Login.module.css"


const New = () => {
    return (  
        <>
            <Navbar />
                <div className='flex flex-row w-full h-full'>
            <Sidebar /> 
            <div className=" w-[83vw] py-12 px-8 mt-[70px] bg-[white] ">
                <h2 className='text-2xl text-center font-bold mb-8'>Create new Appointment</h2>
                
                <div className='flex justify-center items-center  bg-[#ffffff] w-full '>
                    <div className='w-[30%] '>
                        <form className=''>
                            <div className="flex flex-col mb-4">
                                <label className="text-[.9rem] font-medium mb-1 ">Name</label>
                                <input className={styles.input} placeholder="name of appointment"></input>
                            </div>
                            <Calendar />
                            <div className="flex flex-col mb-4">
                                <label className="text-[.9rem] font-medium mb-1 mt-4 ">Description</label>
                                <textarea className={styles.input} placeholder="Short description"></textarea>
                            </div>
                            <button className="button " type="submit">Create</button>
                        </form>
                    </div>
                    </div> 
            </div>        
        </div> 
        </>
    );
}
 
export default New;