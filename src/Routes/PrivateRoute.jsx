import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoute() {
  const token = localStorage.getItem('jwt');
  const user = JSON.parse(localStorage.getItem('user')); // parse user

  if (!token) return <Navigate to="/login" />; // not logged in

  // redirect admin to admin dashboard
  if (user?.role === 'admin') return <Navigate to="/admin/dashboard" />;

  // normal user can access protected routes
  return <Outlet />;
}
