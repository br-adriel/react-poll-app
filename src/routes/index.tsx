import { RouteObject, createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
];

export const router = createBrowserRouter(routes);
