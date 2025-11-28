import { createBrowserRouter } from 'react-router-dom';
import { Main } from '../Layout/Main';
import { Home } from '../Pages/Home/Home';
import { Course } from '../Pages/Course/Course';
import PaymentPage from '../Pages/Pay/PaymentPage';
import { About } from '../Pages/About/About';
import LoginPage from '../Pages/Login/LoginPage';
import SuccessPage from '../Pages/Pay/SuccessPage';
import DashboardPage from '../Pages/Dasboard/Dasboard';
import PrivateRoute from './PrivateRoute';
import DashboardContent from '../Pages/AdminDasboard/DashboardContent';
import AdminLayout from '../Pages/AdminDasboard/AdminLayout';
import { Students } from '../Pages/AdminDasboard/Students';
import { Pending } from '../Pages/AdminDasboard/Pending';
import { NotFound } from '../Pages/Shared/NotFound';
import { AdminUsers } from '../Pages/AdminDasboard/AdminUsers';
import AdminRoute from './AdminRoute';
import PaymentFailed from '../Pages/Shared/PaymentFailed';
import { PrivacyPolicy } from '../Pages/Shared/PrivacyPolicy';
import TermsAndConditions from '../Pages/Shared/TermsAndConditions';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/course-details', element: <Course /> },
      { path: '/about-me', element: <About /> },
      { path: '/login', element: <LoginPage /> },
      { path: '/privacy', element: <PrivacyPolicy /> },
      { path: '/terms', element: <TermsAndConditions /> },
      { path: '/success', element: <SuccessPage /> },
      { path: '/fail', element: <PaymentFailed /> },
      { path: '/payment', element: <PaymentPage /> },

      {
        path: '/dashboard',
        element: <PrivateRoute />,
        children: [{ path: '', element: <DashboardPage /> }],
      },
      {
        path: '/admin/dashboard',
        element: <AdminRoute />,

        children: [
          {
            path: '',
            element: <AdminLayout />,
            children: [
              {
                index: true,
                element: <DashboardContent />,
              },
              {
                path: 'students',
                element: <Students />,
              },
              {
                path: 'pedings',
                element: <Pending />,
              },
              {
                path: 'team',
                element: <AdminUsers />,
              },
              {
                path: '*',
                element: <NotFound></NotFound>,
              },
            ],
          },
        ],
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
