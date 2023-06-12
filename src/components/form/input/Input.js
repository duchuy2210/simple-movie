import React from 'react';
import { useController } from 'react-hook-form';
import Field from '../Field';
import { Label } from '../label';
import { propTypes } from 'prop-types';
import Error from '../Error';

const Input = ({
  error = '',
  control,
  type = '',
  label,
  name,
  className,
  icon,
  ...props
}) => {
  const {
    field,
    formState: { errors },
  } = useController({
    control,
    name,
    defaultValue: '',
  });
  return (
    <div>
      <Field>
        <Label name={name}>{label}</Label>
        <div className="w-full relative">
          <input
            type={type}
            id={name}
            className={`block w-full font-sans bg-[#ebebeb] rounded-[4px] border text-[14px] text-slate-900 px-[15px] py-[10px] focus:bg-white placeholder:opacity-60 placeholder:text-slate-900 ${className}
            }`}
            {...field}
            {...props}
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex justify-center items-center w-[18px] h-[18px]">
            {icon}
          </div>
        </div>
        {errors?.[name]?.message && (
          <Error errorMessage={String(errors?.[name]?.message)}></Error>
        )}
      </Field>
    </div>
  );
};

// Input.propTypes = {
//   name: propTypes.string,
//   type: propTypes.string,
//   error: propTypes.string,
//   control: propTypes.any.isRequired,
// };

export default Input;
