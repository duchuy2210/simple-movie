import { Button } from 'components/button';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {Input, InputTogglePassWord } from 'components/form';
import { Heading } from 'components/Heading';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const schema = yup.object({
  user_name: yup.string().required('Không được để trống mục này'),
  email: yup
    .string()
    .email('Email không hợp lệ')
    .required('Không được để trống mục này'),
  password: yup
    .string()
    .required('Không được để trống mục này')
    .min(6, 'Yêu cầu ít nhất 6 ký tự'),
});

const SignUpPage = () => {
  const navigateTo = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
  });
  const handleSignUp = value => {
    console.log('value:', value);
  };
  return (
    <div className="">
      <Heading as="h2" text="ĐĂNG KÍ" className="text-center" />
      <form onSubmit={handleSubmit(handleSignUp)}>
        <div>
          <Input
            type="text"
            control={control}
            name="user_name"
            placeholder="Đức Huy"
            label="Tên người dùng *"></Input>
          <Input
            control={control}
            name="email"
            type="email"
            label="Email *"
            placeholder="example@gmail.com"></Input>
          <InputTogglePassWord
            type="password"
            control={control}
            name="password"
            placeholder="********"
            label="Mật khẩu *"></InputTogglePassWord>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="">Bạn đã có tài khoản?</span>
          <span
            className="text-emerald-600 cursor-pointer opacity-100 hover:!opacity-80 font-bold tracking-wide underline underline-offset-1"
            onClick={() => {
              navigateTo('/auth/sign-in');
            }}>
            Đăng nhập
          </span>
        </div>
        <Button
          isLoading={false}
          type="submit"
          control={control}
          className="mt-10 w-[200px] block mx-auto">
          Đăng Kí
        </Button>
      </form>
    </div>
  );
};

export default SignUpPage;
