import Image from "next/image";
import success from '../../public/assets/success.gif'

const Success = () => {
    return ( 
        <div className="absolute flex justify-center items-center top-0 left-0 bg-[white] z-50 w-full h-full">
            <Image src={success} alt='' width={100} height={100} className=" "/>
        </div>
     );
}
 
export default Success;