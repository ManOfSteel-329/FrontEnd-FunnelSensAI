import { MdLibraryAddCheck } from "react-icons/md";
import { MdOutlinePieChartOutline } from "react-icons/md";
import { MdPeopleAlt } from "react-icons/md";
import { FaGear } from "react-icons/fa6";

export const routes = [
    {
        name: 'Tasks',
        path: '#',
        icon: MdLibraryAddCheck,
    },
    {
        name: 'Analytics',
        path: '#',
        icon: MdOutlinePieChartOutline,
    },
    {
        name: 'People',
        path: '#',
        icon: MdPeopleAlt,
    },
    {
        name: 'Settings',
        path: '#',
        icon: FaGear,
    }
]