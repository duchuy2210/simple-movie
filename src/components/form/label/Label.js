import React from 'react';

const Label = ({ name, className, props, children }) => {
  return (
    <label
      htmlFor={name}
      className={`ml-[2px] text-white ${className}`}
      {...props}>
      {children}
    </label>
  );
};

export default Label;
