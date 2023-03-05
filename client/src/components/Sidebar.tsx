import Image from "next/image";
import { useEffect, useState } from "react";
import { sidebar } from "@/types/sidebarStyles";
import { sidebarLinks } from "@/data/sidebarLinks";
import Link from "next/link";


const Sidebar = () => {
    const [activeSidebarNum, setActiveSidebarNum] = useState<number>(0);
    
    const handleBtnStyle = (index :number) => {
        setActiveSidebarNum(index);
    }

    const [width, setWidth] = useState<number>(0);
    const [activeMenu, setActiveMenu] = useState<Boolean>(true);
    useEffect(() => {
       const handleResize = () => setWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

  useEffect(() => {
    if (width <= 740) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [width]);

    let btnstyle = "w-full flex flex-row items-center mb-2 py-4 px-2 rounded-xl hover:bg-[#f1f1f1] cursor-pointer "
    

    return ( 
        <>
            {activeMenu && <div className="sidebar relative w-[17vw] h-screen dark:bg-[#1E2026] z-10  " style={{backgroundColor: "white", borderRight: "2px solid #F7F7F7"}}>
            
            <div className="px-4 w-full">
                <div className="py-4 px-2 ">
                    <span className="font-bold text-lightblue text-[2rem]">HEALTHPY</span>
                </div>
                <div className="">
                    {sidebarLinks?.map((item, index)=>(
                        <> 
                                <Link href={item.toLink} key={index} className={activeSidebarNum === index ? 'text-lightblue bg-[#e9f3ff] font-medium ' + btnstyle : 'text-[#868686] bg-[#fff] ' + btnstyle} onClick={()=> handleBtnStyle(index)}>
                                    <span className=" text-[1.5rem]">{item.icon}</span>
                                    <p className=" text-[1rem] ml-2">{item.name}</p>
                                </Link> 
                        </  >
                    ))}
                </div>
            </div>
        </div>}
            
        </>

     );
}
 
export default Sidebar;


const sidebarStyles: sidebar = {
    color : "#7F56DA", 
    backgroundColor: "#dccefa", 
    fontWeight: "500"
}