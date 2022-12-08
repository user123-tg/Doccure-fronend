import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
const ProtectedRoute = ({ allowedRoles }) => {
  console.log(allowedRoles, 'rolessss');
  const data = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : '';
  const role = data?.role;
  console.log(data, 'dataaaaa');
  return role === allowedRoles ? <Outlet /> : <Navigate to="/login" />;
};
export default ProtectedRoute;
