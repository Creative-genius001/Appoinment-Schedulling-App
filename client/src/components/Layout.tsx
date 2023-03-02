import {ReactNode} from 'react'
import { Public_Sans } from '@next/font/google'
import Navbar from './Navbar'
import Sidebar from './Sidebar'


const publicSans = Public_Sans({ subsets: ['latin'] })

interface Props {
    children?: ReactNode
}

const Layout = ({children}: Props) => {
    return ( 
        <div className={publicSans.className}>
            <Navbar />
            <div className='flex flex-row'>
                 <Sidebar />
                {children}
            </div>
        </div>
        
     );
}
 
export default Layout;