import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from '../auth/AuthContext';

const OfficerPrivateRoute = () => {
  const { officerUser } = useContext(AuthContext);

  return officerUser?.role === 'OFFICER' ? (
    <Outlet />
  ) : (
    <Navigate to="/scholar-officer/login" />
  );
};

export default OfficerPrivateRoute;
