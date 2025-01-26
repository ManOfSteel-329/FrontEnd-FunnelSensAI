import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

export default function Button({ children, className = '', ...props }) {
  return (
    <button 
      className={`btn ${className}`}
      {...props}
    >
      <span>{children}</span>
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};