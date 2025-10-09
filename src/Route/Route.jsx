import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Root/Root';
import Home from '../Components/Home/Home';
import Apps from '../Pages/Apps/Apps';
import Installation from '../Pages/Installation/Installation';
import Error from '../Components/Error/Error';
import ErrorApp from '../Components/ErrorApp/ErrorApp';
import AppsDetailes from '../Pages/AppsDetailes/AppsDetailes';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/apps',
                element: <Apps />
            },
            {
                path: '/installation',
                element: <Installation />
            },
            {
                path: '/apps/:id',
                element: <AppsDetailes />
            },
            {
                path: '/apps/*',
                element: <ErrorApp />
            },
            {
                path: '',
                element: <Error />,
            },
        ]
    }

])
export default router;