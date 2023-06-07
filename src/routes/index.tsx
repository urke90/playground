import { Navigate, useRoutes } from 'react-router-dom';

import Dashboard from 'src/layout/Dashboard';
// import Home from 'src/pages/Home/Home';
import Login from 'src/pages/login/Login';
import NotFoundPage from 'src/pages/notFoundPage/NotFoundPage';

const Router: React.FC = () => {
    return useRoutes([
        {
            path: '/',
            element: <Dashboard />,
            children: [
                // {
                //     element: <Navigate to={HOME_PAGE_ROUTES.index} replace />,
                //     index: true
                // },
                // {
                //     path: HOME_PAGE_ROUTES.index,
                //     element: <Home />
                // }
            ]
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '*',
            element: <NotFoundPage />
        }
    ]);
};

export default Router;
