import { RouteObject, createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Create from '../pages/Create';
import App from '../App';

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
    ],
  },
];

export const router = createBrowserRouter(routes);
