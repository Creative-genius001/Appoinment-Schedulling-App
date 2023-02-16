import Image from "next/image";
import { useState } from "react";
import { sidebar } from "@/types/sidebarStyles";
import { sidebarLinks } from "@/data/sidebarLinks";
import Link from "next/link";

const Sidebar = () => {
    const [activeSidebarButton, setActiveSidebarButton] = useState<Boolean>(true);

    return ( 
        <div className=" w-[17vw] h-[100vh] dark:bg-[#1E2026] px-4   " style={{backgroundColor: "white"}}>
            <div className="mt-2 mb-8">
                <span className="font-bold text-darkpurple text-[2rem]">HEALTHPY</span>
            </div>
            <div className="">
                {sidebarLinks?.map((item, index)=>(
                    <> 
                        
                            <Link href={item.toLink} key={index} className="bg-[#fff] w-full flex flex-row items-center mb-2 py-4 px-2 rounded-xl hover:bg-[#f1f1f1]  cursor-pointer " style={{}}>
                                <span className="text-[#585858] text-[1.5rem]">{item.icon}</span>
                                <p className="text-[#3b3b3b] text-[1rem] ml-2">{item.name}</p>
                            </Link>
                        
                        
                    </>
                ))}
            </div>
        </div>
     );
}
 
export default Sidebar;


const sidebarStyles: sidebar = {
    color : "#7F56DA", 
    backgroundColor: "#dccefa", 
    fontWeight: "500"
}