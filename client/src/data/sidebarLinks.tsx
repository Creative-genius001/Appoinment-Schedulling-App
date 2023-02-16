import {RiHomeLine, RiLogoutBoxLine} from 'react-icons/ri'
import {MdDateRange} from 'react-icons/md'
import {CgProfile, CgLogOut} from 'react-icons/cg'

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
        icon: <CgLogOut />,
        toLink: "/login"
    }

]