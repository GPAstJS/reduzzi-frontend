/** @format */

import { createBrowserRouter } from 'react-router-dom';

import { LoginPage } from './login';

import { DashboardPage } from './dashboard';

export const pages = createBrowserRouter([
    {
        path: '/',
        element: <LoginPage />,
    },
    {
        path: '/dashboard',
        element: <DashboardPage />,
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
]);
