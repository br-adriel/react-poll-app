import { RouteObject, createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Create from '../pages/Create';
import Home from '../pages/Home';
import Poll from '../pages/Poll';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: '/create',
        element: <Create />,
      },
      {
        path: '/poll',
        element: <Poll />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
