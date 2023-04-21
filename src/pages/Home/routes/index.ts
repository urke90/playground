import { RouteObject } from 'react-router-dom';

const HOME_PAGE_ROOT = '/home';

export const HOME_PAGE_ROUTES = {
    root: HOME_PAGE_ROOT,
    index: `${HOME_PAGE_ROOT}/index`
};

export const homePageRouting: RouteObject = {
    path: HOME_PAGE_ROUTES.root
};
