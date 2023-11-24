import React from 'react';
import { createRoot } from 'react-dom';
import App from './routes/App';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Login from './routes/Login';
import Dashborad from './routes/Dashborad';

// const router = createBrowserRouter([
//     {
//         path: "/login",
//         element: <Login />
//     },
//     {
//         path: "/dashboard",
//         element: <Dashborad />
//     }
// ])

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Login />
            },
            {
                path: "/dashboard",
                element: <Dashborad />
            }
        ]
    },

])

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
