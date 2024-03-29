import { RouteObject, createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Create from '../pages/Create';
import Error from '../pages/Error';
import Home from '../pages/Home';
import Poll from '../pages/Poll';
import Vote from '../pages/Vote';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
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
      {
        path: '/poll/:pollId/vote',
        element: <Vote />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
