import { useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';

const useAuth = () => {
  const [auth, setAuth] = useState({ isAuthenticated: false, user: null });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setAuth({ isAuthenticated: true, user: decoded });
      } catch (error) {
        console.error('Invalid token:', error);
        setAuth({ isAuthenticated: false, user: null });
      }
    }
  }, []);

  return auth;
};

export default useAuth;
