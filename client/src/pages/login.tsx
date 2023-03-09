import Image from "next/image";
import Link from "next/link";
import doc from '../../public/assets/doc.jpg';
import styles from ".././styles/Login.module.css"
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import { Alert } from "antd";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


// interface IFormInput {
//   email: String;
//   password: String;
// }

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(8, 'Password must be at least 8 characters').max(20, 'Password cannot exceed 20 characters'),
});


type FormData = yup.InferType<typeof schema>;


const Login = () => {
    const router = useRouter()
    const { register, formState: { errors }, handleSubmit } = useForm<FormData>({
        mode: "onChange",
        resolver: yupResolver(schema),
        defaultValues: {
        email: "",
        password: ""
    }
    });


    const onSubmit = (data: FormData) => {
        console.log(data);
        router.push('/')
    }

   
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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col">
                            <label className="text-[.9rem] font-medium mb-1 ">Email</label>
                            <input type="text"  {...register("email", { required: true })} className={styles.input} placeholder="Enter your email"></input>
                            {errors.email && <Alert message={errors.email?.message} type="error" showIcon className="mt-2"/>}
                        </div>
                        <div className="flex flex-col mt-3">
                            <label className="text-[.9rem] font-medium mb-1">Password</label>
                            <input type='password' {...register("password", { required: true })} className={styles.input} placeholder="Enter your password"></input>
                            {errors.password && <Alert message={errors.password?.message} type="error" showIcon className="mt-2"/>}
                        </div>
                        <p className="text-[.9rem] mt-4  ">Forgot password? <Link href={"/"}><span className="font-semibold text-lightblue hover:underline  ">Click here</span></Link></p>
                        <input className="button" type="submit" value='Log in' />
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