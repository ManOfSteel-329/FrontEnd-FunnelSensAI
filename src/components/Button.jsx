import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ 
  children,
  disabled = false,
  onClick,
  type = 'button',
  className = ''
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleGlobalClick = (e) => {
      if (buttonRef.current && !buttonRef.current.contains(e.target)) {
        setIsPressed(false);
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, []);

  const handleClick = (e) => {
    // Remove active state from all other buttons
    document.querySelectorAll('.btn').forEach(btn => {
      if (btn !== buttonRef.current) {
        btn.classList.remove('active', 'focus');
        // Also reset their pressed state if they're Button components
        btn._buttonInstance?.setPressed?.(false);
      }
    });

    setIsPressed(!isPressed);
    if (onClick) {
      onClick(e);
    }
  };

  // Store the setPressed function on the button element
  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current._buttonInstance = { setPressed: setIsPressed };
    }
  }, []);

  const activeClasses = isPressed ? 'active focus' : '';

  return (
    <button
      ref={buttonRef}
      type={type}
      className={`btn ${className} ${activeClasses}`}
      disabled={disabled}
      onClick={handleClick}
      data-bs-toggle="button"
      aria-pressed={isPressed}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string
};

export default Button;