import { useRoutes } from 'react-router-dom';
import Home from '@/pages/Home';
import Layout from '@/layout/Layout';
import NotFound from '@/pages/NotFound';

export default function Router() {
  return useRoutes([
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
          index: true,
        },
      ],
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);
}
