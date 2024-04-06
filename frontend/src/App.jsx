import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import AuthenticatedContent from './components/AuthenticatedContent';

const App = () => {
  const handleSignOut = () => {
    localStorage.removeItem('token'); // Remove the stored token
    window.location.href = '/'; // Redirect to login page
  };

  return (
    <Router>
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center py-4">
          <Link to="/" className="text-blue-500">Login</Link>
          <Link to="/register" className="text-blue-500">Register</Link>
          <button onClick={handleSignOut} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Sign Out
          </button>
        </nav>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/content" element={<AuthenticatedContent />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
