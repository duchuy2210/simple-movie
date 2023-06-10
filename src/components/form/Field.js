import React from 'react';

const Field = ({ children, className, ...props }) => {
  return (
    <div
      className={`flex flex-col items-start gap-1 justify-start pb-5 ${className}`}
      {...props}>
      {children}
    </div>
  );
};

export default Field;
