import React, { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import './SignIn.css';

const SignIn = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign in logic here
    console.log('Form submitted:', formData);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="signin-card" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        
        <div className="logo-container">
          <img src="/logo.png" alt="Logo" className="logo" />
        </div>

        <h1>Welcome back</h1>
        <p className="subtitle">Please enter your details to sign in.</p>

        <form onSubmit={handleSubmit} className="signin-form">
          <div className="form-group">
            <label>Email Address</label>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <Input
              type="password"
              name="password"
              placeholder="••••"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="form-options">
            <label className="remember-me">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              <span>Remember me</span>
            </label>
            <a href="/forgot-password" className="forgot-password">
              Forgot Password?
            </a>
          </div>

          <Button type="submit" variant="primary" className="signin-button">
            Sign In
          </Button>
        </form>

        <p className="register-prompt">
          Don't have an account yet?{' '}
          <a href="/register" className="register-link">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn; 