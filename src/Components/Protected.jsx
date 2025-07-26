import React from 'react'
import { useLocation, Navigate } from 'react-router-dom';

const Protected = ({ children }) => {

  const location = useLocation()
  const tokenString = localStorage.getItem('token');
  let token = tokenString && tokenString !== 'undefined' ? JSON.parse(tokenString) : null;

  if (!token) {
    return (
        <Navigate to="/sign-in" state={{ from: location }} replace />
      ) 
  }

  return children;
}

export default Protected