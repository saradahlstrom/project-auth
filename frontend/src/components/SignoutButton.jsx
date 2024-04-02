// src/components/SignOutButton.js
import React from 'react';
import { useHistory } from 'react-router-dom';

const SignOutButton = () => {
  let history = useHistory();

  const handleSignOut = () => {
    localStorage.removeItem('token');
    history.push('/login');
  };

  return (
    <button onClick={handleSignOut}>Sign Out</button>
  );
};

export default SignOutButton;
