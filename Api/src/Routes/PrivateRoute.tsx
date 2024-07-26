import React from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  element: React.ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const token = localStorage.getItem('authToken'); // Check if token exists

  // Render the element if the token exists, otherwise navigate to login
  return token ? element : <Navigate to="/" />;
};

export default PrivateRoute;
