// assets
import { IconDashboard } from '@tabler/icons';

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    children: [
        {
            id: 'student',
            title: 'Student',
            type: 'item',
            url: '/dashboard/student',
            icon: icons.IconDashboard,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
