import React from 'react';

const Heading = ({ as, text, className, ...rest }) => {
  return React.createElement(
    as,
    {
      className: `block w-full pb-5 text-4xl font-bold tracking-wide text-main-blue ${className}`,
      ...rest,
    },
    text
  );
};

export default Heading;
