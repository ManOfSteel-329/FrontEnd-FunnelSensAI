import { MdLibraryAddCheck } from "react-icons/md";
import { MdOutlinePieChartOutline } from "react-icons/md";
import { MdPeopleAlt } from "react-icons/md";
import { FaGear } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";

export const routes = [
    {
        name: 'Tasks',
        path: '#',
        icon: MdLibraryAddCheck,
    },
    {
        name: 'Ideas',
        path: '#',
        icon: FaRegLightbulb,
    },
    {
        name: 'Finance',
        path: '#',
        icon: FaDollarSign,
    },
    {
        name: 'Analytics',
        path: '#',
        icon: MdOutlinePieChartOutline,
    },
    {
        name: 'Settings',
        path: '#',
        icon: FaGear,
    }
]