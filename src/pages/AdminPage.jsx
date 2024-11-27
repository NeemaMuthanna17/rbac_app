import React, { useState } from 'react';
import { usePermission } from '../contexts/PermissionContext';

const AdminPage = () => {
  const { permissions, updatePermissions } = usePermission();
  const [selectedRole, setSelectedRole] = useState('user');
  const [newPermissions, setNewPermissions] = useState(permissions[selectedRole]);

  const handleUpdate = () => {
    updatePermissions(selectedRole, newPermissions);
    alert(`${selectedRole} permissions updated!`);
  };

  const togglePermission = (perm) => {
    setNewPermissions((prev) =>
      prev.includes(perm)
        ? prev.filter((p) => p !== perm)
        : [...prev, perm]
    );
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <select value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>

      <div>
        <label>
          <input
            type="checkbox"
            checked={newPermissions.includes('viewUserPage')}
            onChange={() => togglePermission('viewUserPage')}
          />
          View User Page
        </label>

        <label>
          <input
            type="checkbox"
            checked={newPermissions.includes('viewAdminPage')}
            onChange={() => togglePermission('viewAdminPage')}
          />
          View Admin Page
        </label>
      </div>
      <button onClick={handleUpdate}>Save</button>
    </div>
  );
};

export default AdminPage;
