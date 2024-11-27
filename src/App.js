import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import AdminPage from './pages/AdminPage';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';
import { PermissionProvider } from './contexts/PermissionContext';

const App = () => {
  return (
    <AuthProvider>
      <PermissionProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/user"
              element={
                <ProtectedRoute permission="viewUserPage">
                  <UserPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin"
              element={
                // <ProtectedRoute permission="viewAdminPage">
                  <AdminPage />
                // </ProtectedRoute>
              }
            />
          </Routes>
        </Router>
      </PermissionProvider>
    </AuthProvider>
  );
};

export default App;
