import { RouteObject, createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Create from '../pages/Create';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/create',
    element: <Create />,
  },
];

export const router = createBrowserRouter(routes);
