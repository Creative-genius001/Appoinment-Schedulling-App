import Calendar from "@/components/Calendar";
import Time from "@/components/Time";
import styles from "@/styles/Login.module.css"



const New = () => {
    return (  
        <>
            <div className="main w-[83vw] py-12 px-12 mt-[70px] bg-[white] ">
                <div className='flex  items-center w-full '>
                    <div className='new-container sm:w-full lg:w-[30%] '>
                        <h2 className='lg:text-2xl font-bold mb-2'>Create new Appointment</h2>
                        <p className="mb-8 leading-tight text-[#3b3b3b]  ">All appointments should be scheduled atleast a day ahead.</p>
                        <form className=''>
                            <div className="flex flex-col mb-4">
                                <label className="text-[.9rem] font-medium mb-1 ">Appointment title</label>
                                <input className={styles.input} placeholder="Title of appointment"></input>
                            </div>
                            <div className="flex flex-row w-full justify-between ">
                                <Calendar />
                                <Time />

                            </div>
                            
                            <div className="flex flex-col mb-4">
                                <label className="text-[.9rem] font-medium mb-1 mt-4 ">Appointment description</label>
                                <textarea className={styles.input} placeholder="Short description"></textarea>
                            </div>
                            <button className="button " type="submit">Create</button>
                        </form>
                    </div>
                    </div> 

            </div>   
        </>
    );
}
 
export default New;