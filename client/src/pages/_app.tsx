import Layout from '@/components/Layout'
import type { AppProps } from 'next/app'
import styles from '@/styles/Home.module.css'
import "../styles/index.css"
import "@/styles/css/navbar.css"
import "@/styles/css/calendar.css"
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense("Mgo+DSMBaFt/QHRqVVhlXVpHaV1LQmFJfFBmR2lcelRydUUmHVdTRHRcQl9hQX5XdkRjWXxfcXA=;Mgo+DSMBPh8sVXJ0S0J+XE9Bd1RBQmFAYVF2R2BJfVR1cV9EYUwxOX1dQl9gSXxRfkVnWX5ecHdWR2Q=;ORg4AjUWIQA/Gnt2VVhkQlFac15JXnxLd0x0RWFab1x6cVBMYl1BJAtUQF1hSn5RdE1jXX9fcHRWQmhY;MTIyMTAwOEAzMjMwMmUzNDJlMzBlK0VtUVlyWXRYQlpqL0lUa2thSXlmOWZmYldBNUIxQmRqdk5kM3JTcXVZPQ==;MTIyMTAwOUAzMjMwMmUzNDJlMzBhT1p4QTRpT3Q1NUJueU1vejU5VXdwaldmRE13UGl5SC9XbkRkZ0duZ1FRPQ==;NRAiBiAaIQQuGjN/V0Z+WE9EaFpDVmBWfFppR2NbfE5yflBDal5QVBYiSV9jS31TdEdrWXtecXRVQmFeUQ==;MTIyMTAxMUAzMjMwMmUzNDJlMzBjaHd4ZEI2clYvS2RNY3BRMWE3eENhVHFIZWF5VHdDZHJlZXhRcUVWcmpVPQ==;MTIyMTAxMkAzMjMwMmUzNDJlMzBrUDdMM3NMalRmTXhPdVY5WGN6NjMvN0FmUlc1QkNZN0JTQTFnY1EvNTA4PQ==;Mgo+DSMBMAY9C3t2VVhkQlFac15JXnxLd0x0RWFab1x6cVBMYl1BJAtUQF1hSn5RdE1jXX9fcHRRQGlZ;MTIyMTAxNEAzMjMwMmUzNDJlMzBKcW5PL2kvRjg5QzhkenhqUy94L1phalJyU0MrZHJDWlNCakFrWlQ4VC80PQ==;MTIyMTAxNUAzMjMwMmUzNDJlMzBnN2FLd0pUeUgreWJIR25XV3VLV2NNL1BNU3IySHRPOWt4N012RVBXQVNVPQ==;MTIyMTAxNkAzMjMwMmUzNDJlMzBjaHd4ZEI2clYvS2RNY3BRMWE3eENhVHFIZWF5VHdDZHJlZXhRcUVWcmpVPQ==");


export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.body}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
        
     </div>
  )
  
}
