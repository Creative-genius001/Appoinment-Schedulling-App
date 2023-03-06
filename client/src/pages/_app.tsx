import Layout from '@/components/Layout'
import type { AppProps } from 'next/app'
import styles from '@/styles/Home.module.css'
import "../styles/index.css"
import "@/styles/css/navbar.css"
import "@/styles/css/profile.css"
import "@/styles/css/signup_login.css"
import { StateProvider } from '@/context/ContextProvider'
import {useRouter} from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  if(router.asPath =='/login' || router.asPath == '/signup')  {
     return (
      <div className={styles.body}>
            <Component {...pageProps} />
      </div>
     )
  }

  return (
    
      <div className={styles.body}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        
     </div>
   
    
  )
  
}
