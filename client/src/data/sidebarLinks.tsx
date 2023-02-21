import {RiHomeLine, RiUser3Line} from 'react-icons/ri'
import {CgLogOut} from 'react-icons/cg'
import{HiOutlineCalendar} from 'react-icons/hi'

interface sideLinkProp {
        name: String,
        icon: JSX.Element,
        toLink: String
}


export const sidebarLinks : sideLinkProp[] = [
    {
        name: "Home",
        icon: <RiHomeLine />,
        toLink: "/"
    },
    {
        name: "Profile",
        icon: <RiUser3Line />,
        toLink: "/profile"
    },
    {
        name: "Appointments",
        icon: <HiOutlineCalendar />,
        toLink: "/appointments"
    },
    {
        name: "Logout",
        icon: <CgLogOut />,
        toLink: "/login"
    }

]