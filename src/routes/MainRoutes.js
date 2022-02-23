import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardStudent = Loadable(lazy(() => import('views/dashboard/Student')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = () => {
    const auth = useSelector((state) => state.auth);

    return {
        path: '/',
        element: auth.token ? <MainLayout /> : <Navigate to="/auth/login" />,
        children: [
            {
                path: '/',
                element: <DashboardStudent />
            },
            {
                path: '/dashboard/student',
                element: <DashboardStudent />
            }
        ]
    };
};

export default MainRoutes;
