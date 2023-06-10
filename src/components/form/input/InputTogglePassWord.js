import CloseEye from 'components/icons/CloseEye';
import OpenEye from 'components/icons/OpenEye';
import React, { useState } from 'react';
import Input from './Input';

const InputTogglePassWord = ({
  control,
  name,
  label,
  icon,
  className,
  ...props
}) => {
  const [toggle, setToggle] = useState(false);
  const toggleComponent = (
    <div
      onClick={() => {
        setToggle(!toggle);
      }}
      style={{ cursor: 'pointer' }}>
      {toggle ? <OpenEye /> : <CloseEye />}
    </div>
  );
  return (
    <Input
      control={control}
      name={name}
      {...props}
      type={toggle ? 'text' : 'password'}
      icon={toggleComponent}
      className={`tracking-[0.2rem] ${className}`}
      label={label}
      // labelWidth={labelWidth}
    />
  );
};

export default InputTogglePassWord;
