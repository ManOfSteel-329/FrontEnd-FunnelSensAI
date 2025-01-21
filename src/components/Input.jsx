import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

const Input = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  disabled = false,
  className = '',
  name,
  required = false
}) => {
  return (
    <div className="input-wrapper">
      <input
        type={type}
        className={`input ${error ? 'input-error' : ''} ${className}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        name={name}
        required={required}
      />
      {error && <span className="input-error-message">{error}</span>}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool
};

export default Input; 