import React from 'react';

const Button = ({
  onClick,
  className,
  type = 'button',
  children,
  bgColor = 'primary',
}) => {
  let bgClassName = 'bg-primary';
  switch (bgColor) {
    case 'primary':
      bgClassName = 'bg-primary';
      break;
    case 'secondary':
      bgClassName = 'bg-secondary';
      break;
    default:
      break;
  }
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-3 rounded-lg capitalize font-medium text-white ${bgClassName} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
