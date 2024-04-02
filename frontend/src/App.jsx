// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import AuthenticatedContent from './components/AuthenticatedContent';
import SignOutButton from './components/SignOutButton';

function App() {
  const isAuthenticated = () => localStorage.getItem('token') !== null;

  return (
    <Router>
      <div>
        {isAuthenticated() && <SignOutButton />}
        <Routes>
          <Route path="/register" element={<RegistrationForm onRegister={() => navigate('/login')} />} />
          <Route path="/login" element={<LoginForm onLogin={() => navigate('/content')} />} />
          <Route
            path="/content"
            element={
              isAuthenticated() ? (
                <AuthenticatedContent />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="*"
            element={
              isAuthenticated() ? <Navigate to="/content" /> : <Navigate to="/login" />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
