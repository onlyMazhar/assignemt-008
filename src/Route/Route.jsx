import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Root/Root';
import Home from '../Components/Home/Home';
import Apps from '../Pages/Apps/Apps';
import Installation from '../Pages/Installation/Installation';
import Error from '../Components/Error/Error';
import ErrorApp from '../Components/ErrorApp/ErrorApp';

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: Error,
        Component: Root,
        children: [
            {
                index: true,
                loader: () => fetch('/home.json'),
                Component: Home
            },
            {
                path: '/apps',
                loader: () => fetch('/allApp.json'),
                Component: Apps
            },
            {
                path: '/installation',
                Component: Installation
            }, {
                path: '/*',
                Component: Error,
            },
            {
                path: '/apps/*',
                Component: ErrorApp
            }
        ]
    }

])
export default router;