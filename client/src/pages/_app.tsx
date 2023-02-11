import Layout from '@/components/Layout'
import type { AppProps } from 'next/app'
import styles from '@/styles/Home.module.css'
import "../styles/index.css"


export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.body}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
     </div>
  )
  
}
