import React, { createContext, useContext, useState } from 'react';

const PermissionContext = createContext();

export const PermissionProvider = ({ children }) => {
  // Example initial permissions
  const [permissions, setPermissions] = useState({
    user: ['viewUserPage'],
    admin: ['viewAdminPage', 'managePermissions'],
  });

  const updatePermissions = (role, newPermissions) => {
    setPermissions((prev) => ({
      ...prev,
      [role]: newPermissions,
    }));
  };

  const hasPermission = (role, permission) =>
    permissions[role]?.includes(permission);

  return (
    <PermissionContext.Provider value={{ permissions, updatePermissions, hasPermission }}>
      {children}
    </PermissionContext.Provider>
  );
};

export const usePermission = () => useContext(PermissionContext);
