import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './layout/Layout';
import ErrorPage from './pages/error/ErrorPage';
import routes from './routes';

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: routes,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
