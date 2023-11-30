import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from '../auth/AuthContext';

const HeadPrivateRoute = () => {
  const { headUser } = useContext(AuthContext);

  return headUser?.role === 'HEAD' ? (
    <Outlet />
  ) : (
    <Navigate to="/head-officer/login" />
  );
};

export default HeadPrivateRoute;
