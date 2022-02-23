import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

const AuthLogin = Loadable(lazy(() => import('views/pages/authentication/template/Login')));
const AuthRegister = Loadable(lazy(() => import('views/pages/authentication/template/Register')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = () => {
    const auth = useSelector((state) => state.auth);

    return {
        path: '/auth',
        element: !auth.token ? <MinimalLayout /> : <Navigate to="/" />,
        children: [
            {
                path: '/login',
                element: <AuthLogin />
            },
            {
                path: '/register',
                element: <AuthRegister />
            }
        ]
    };
};

export default AuthenticationRoutes;
