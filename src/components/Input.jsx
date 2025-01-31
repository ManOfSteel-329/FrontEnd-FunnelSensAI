import React, { useState } from 'react';
import { VisibilityOutlined, VisibilityOffOutlined } from '@mui/icons-material';
import './Input.css';

export default function Input({ className = '', isValid, isInvalid, errorMessage, ...props }) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = props.type === 'password';

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="form-group">
      <div className="input-wrapper">
        <input
          {...props}
          className={`form-control ${isInvalid ? 'is-invalid' : ''} ${isValid ? 'is-valid' : ''} ${className}`}
          type={isPassword ? (showPassword ? 'text' : 'password') : props.type}
        />
        {isPassword && (
          <button
            type="button"
            className="password-toggle"
            onClick={togglePasswordVisibility}
            tabIndex="-1"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <VisibilityOffOutlined /> : <VisibilityOutlined />}
          </button>
        )}
      </div>
      {isInvalid && errorMessage && (
        <div className="invalid-feedback">
          {errorMessage}
        </div>
      )}
    </div>
  );
} 