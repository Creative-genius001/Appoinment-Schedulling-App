import {RiHome5Line, RiLogoutBoxLine} from 'react-icons/ri'
import {MdDateRange} from 'react-icons/md'
import {CgProfile} from 'react-icons/cg'

interface sideLinkProp {
        name: String,
        icon: JSX.Element,
        toLink: String
}


export const sidebarLinks : sideLinkProp[] = [
    {
        name: "Home",
        icon: <RiHome5Line />,
        toLink: "/"
    },
    {
        name: "Profile",
        icon: <CgProfile />,
        toLink: "/profile"
    },
    {
        name: "Appointments",
        icon: <MdDateRange />,
        toLink: "/appointments"
    },
    {
        name: "Logout",
        icon: <RiLogoutBoxLine />,
        toLink: "/login"
    }

]