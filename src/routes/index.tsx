import { useRoutes } from 'react-router-dom';
import Home from '@/pages/Home';
import Layout from '@/layout/Layout';

export default function Router() {
  return useRoutes([
    {
      element: <Layout />,
      children: [
        {
          element: <Home />,
          index: true,
        },
      ],
    },
  ]);
}
