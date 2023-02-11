import {ReactNode} from 'react'
import { Public_Sans } from '@next/font/google'

const publicSans = Public_Sans({ subsets: ['latin'] })


interface Props {
    children?: ReactNode
}
const Layout = ({children}: Props) => {
    return ( 
        <div className={publicSans.className}>
             {children}
        </div>
        
     );
}
 
export default Layout;