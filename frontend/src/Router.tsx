import CustomerList from 'pages/Admin/CustomerList';
import RegisterCafe from 'pages/Admin/RegisterCafe';
import CouponList from 'pages/CouponList';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <CouponList />,
    },
    {
      path: '/admin',
      children: [
        { index: true, element: <CustomerList /> },
        { path: 'register-cafe', element: <RegisterCafe /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
