import { MdLibraryAddCheck } from "react-icons/md";
import { MdOutlinePieChartOutline } from "react-icons/md";
import { MdPeopleAlt } from "react-icons/md";
import { FaGear } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import SearchIcon from '@mui/icons-material/Search';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import ssid_chart from './assets/ssid_chart.svg'
import attach_money from './assets/attach_money.svg'
import lightbulb from './assets/lightbulb.svg'
import pie_chart_outline from './assets/Pie_chart_outline.svg'
import Settings from './assets/Settings.svg'
import Group from './assets/Group.svg'

export const routes = [
    {
        name: 'Tasks',
        path: '#',
        // icon: MdLibraryAddCheck,
        // not <SsidChartIcon /> because Sidebar.js is putting the < />
        // icon: SsidChartIcon,  
        icon: ssid_chart,  
    },
    {
        name: 'Ideas',
        path: '#',
        icon: lightbulb// FaRegLightbulb,
    },
    {
        name: 'Finance',
        path: '#',
        icon: attach_money, // FaDollarSign,
    },
    {
        name: 'pie',
        path: '#',
        icon: pie_chart_outline
    },
    {
        name: 'Settings',
        path: '#',
        icon: Settings,
    },
    {
        name: 'Group',
        path: '#',
        icon: Group,
    }
]