import SsidChartIcon from '@mui/icons-material/SsidChart';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PieChartOutlineIcon from '@mui/icons-material/PieChartOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import attach_money from './assets/attach_money.svg'
import lightbulb from './assets/lightbulb.svg'
import pie_chart_outline from './assets/Pie_chart_outline.svg'
import Settings from './assets/Settings.svg'
import ssid_chart from './assets/ssid_chart.svg'

export const routes = [
    {
        name: 'Trend',
        path: '#',
        icon: SsidChartIcon,
        hoverIcon: ssid_chart,  
    },
    {
        name: 'Ideas',
        path: '#',
        icon: LightbulbIcon,
        hoverIcon: lightbulb
    },
    {
        name: 'Finance',
        path: '#',
        icon: AttachMoneyIcon,
        hoverIcon: attach_money
    },
    {
        name: 'Chart',
        path: '#',
        icon: PieChartOutlineIcon,
        hoverIcon: pie_chart_outline
    },
    {
        name: 'Settings',
        path: '#',
        icon: SettingsIcon,
        hoverIcon: Settings
    },
]