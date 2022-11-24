import { createBrowserRouter } from "react-router-dom";

import Root from '../layout/root.jsx';
import Home from '../views/home.jsx';
import Contact from '../views/contact.jsx';
import Project from '../views/project.jsx';
import NotFound from '../views/notFound.jsx';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/project',
                element: <Project />,
            }
        ]
    },
]);
