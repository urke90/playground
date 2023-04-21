import { Navigate, useRoutes } from 'react-router-dom';

import { HOME_PAGE_ROUTES } from 'src/pages/Home/routes';

import Dashboard from 'src/layout/Dashboard';
import Home from 'src/pages/Home/Home';

// added comment
const Router: React.FC = () => {
    return useRoutes([
        {
            path: '/',
            element: <Dashboard />,
            children: [
                {
                    element: <Navigate to={HOME_PAGE_ROUTES.index} replace />,
                    index: true
                },
                {
                    path: HOME_PAGE_ROUTES.index,
                    element: <Home />
                }
            ]
        }
    ]);
};

export default Router;
