import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const HomePage = () => {
  const { currentUser, login, logout } = useAuth();

  return (
    <div>
      <h1>Home Page</h1>
      <p>{currentUser ? `Logged in as: ${currentUser.username}` : 'Not logged in'}</p>
      {!currentUser ? (
        <>
          <button onClick={() => login('user')}>Login as User</button>
          <button onClick={() => login('admin')}>Login as Admin</button>
        </>
      ) : (
        <button onClick={logout}>Logout</button>
      )}
    </div>
  );
};

export default HomePage;
