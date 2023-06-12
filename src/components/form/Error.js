import React from 'react';

const Error = ({ className, errorMessage, ...props }) => {
  return (
    <span
      className={`ml-[2px] text-[0.8rem] font-semibold text-[#fa4747] ${className}`}
      {...props}>
      {errorMessage}
    </span>
  );
};

export default Error;
