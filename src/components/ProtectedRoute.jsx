import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { usePermission } from '../contexts/PermissionContext';

const ProtectedRoute = ({ permission, children }) => {
  const { currentUser } = useAuth();
  const { hasPermission } = usePermission();

  if (!currentUser || !hasPermission(currentUser.role, permission)) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
