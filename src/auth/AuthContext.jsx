import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import connectAPI from '../connection/connectAPI';
import { toast } from 'react-toastify';

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [officerUser, setOfficerUser] = useState(() =>
    localStorage.getItem('access_token')
      ? jwtDecode(localStorage.getItem('access_token'))
      : null
  );

  const [headUser, setHeadUser] = useState(() =>
    localStorage.getItem('access_token')
      ? jwtDecode(localStorage.getItem('access_token'))
      : null
  );

  const [isLoading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleOfficerLogin = async e => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await connectAPI.post(
        '/api/token/',
        JSON.stringify({
          username: e.target.officer_username.value,
          password: e.target.officer_password.value,
        })
      );

      localStorage.setItem('access_token', res.data.access);
      localStorage.setItem('refresh_token', res.data.refresh);

      setOfficerUser(jwtDecode(res.data.access));
      connectAPI.defaults.headers['Authorization'] =
        'JWT ' + localStorage.getItem('access_token');

      setLoading(false);
      return navigate('/scholar-officer/');
    } catch (err) {
      setLoading(false);
      console.error(err);
      if (err.response.status === 401) {
        toast.error('Invalid Credentials');
        e.target.officer_username.value = '';
        e.target.officer_password.value = '';
      }
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
    }
  };

  const handleHeadLogin = async e => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await connectAPI.post(
        '/api/token/',
        JSON.stringify({
          username: e.target.head_username.value,
          password: e.target.head_password.value,
        })
      );

      localStorage.setItem('access_token', res.data.access);
      localStorage.setItem('refresh_token', res.data.refresh);

      setHeadUser(jwtDecode(res.data.access));
      connectAPI.defaults.headers['Authorization'] =
        'JWT ' + localStorage.getItem('access_token');

      setLoading(false);
      return navigate('/head-officer/');
    } catch (err) {
      setLoading(false);
      console.error(err);
      if (err.response.status === 401) {
        toast.error('Invalid Credentials');
        e.target.head_username.value = '';
        e.target.head_password.value = '';
      }
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
    }
  };

  const logoutUser = () => {
    setOfficerUser(null);
    setHeadUser(null);
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    navigate('/');
  };

  return (
    <AuthContext.Provider
      value={{
        officerUser,
        handleOfficerLogin,
        headUser,
        handleHeadLogin,
        logoutUser,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
