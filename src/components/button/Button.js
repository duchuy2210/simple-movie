import { LoadingCircle } from 'components/common/loading/Circle';
import React from 'react';

const Button = ({
  isLoading = false,
  onClick,
  className,
  type = 'button',
  children,
  kind = 'primary',
}) => {
  let bgClassName = 'bg-primary';
  switch (kind) {
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
      className={`px-6 py-3 rounded-lg ${
        !!isLoading ? 'opacity-50 pointer-events-none' : ''
      } capitalize font-medium flex justify-center items-center text-white ${bgClassName} ${className}`}>
      {isLoading ? <LoadingCircle></LoadingCircle> : children}
    </button>
  );
};

export default Button;
