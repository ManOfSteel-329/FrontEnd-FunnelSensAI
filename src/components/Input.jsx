import React from 'react';
import './Input.css';

export default function Input({ className = '', isValid, isInvalid, errorMessage, ...props }) {
  return (
    <div className="form-group">
      <input
        className={`form-control ${isInvalid ? 'is-invalid' : ''} ${isValid ? 'is-valid' : ''} ${className}`}
        {...props}
      />
      {isInvalid && errorMessage && (
        <div className="invalid-feedback">
          {errorMessage}
        </div>
      )}
    </div>
  );
} 