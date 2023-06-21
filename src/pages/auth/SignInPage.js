import { Button } from 'components/button';
import { Input, InputTogglePassWord } from 'components/form';
import { Heading } from 'components/Heading';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actionSignIn } from 'store/auth/authAction';
import { forceSignOut } from 'store/store';

const schema = yup.object({
  email: yup
    .string()
    .email('Email không hợp lệ')
    .required('Không được để trống mục này'),
  password: yup
    .string()
    .required('Không được để trống mục này')
    .min(6, 'Yêu cầu ít nhất 6 ký tự'),
});

const SignInPage = () => {
  const navigateTo = useNavigate();
  useEffect(() => {
    forceSignOut();
  }, []);
  const dispatch = useDispatch();
  const { loadingSignIn } = useSelector(state => state.auth);
  const { handleSubmit, control } = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
  });
  const handleSignIn = values => {
    dispatch(
      actionSignIn({
        values,
        onSuccess: () => {
          navigateTo('/');
        },
      })
    );
  };
  return (
    <div className="">
      <Heading as="h2" text="ĐĂNG NHẬP" className="text-center" />
      <form onSubmit={handleSubmit(handleSignIn)}>
        <Input
          control={control}
          name="email"
          type="email"
          label="Email *"
          placeholder="example@gmail.com"></Input>
        <InputTogglePassWord
          control={control}
          name="password"
          placeholder="********"
          label="Mật khẩu *"></InputTogglePassWord>
        <div className="flex items-center gap-2 text-sm">
          <span className="">Bạn chưa có tài khoản?</span>
          <span
            className="text-emerald-600 cursor-pointer opacity-100 hover:!opacity-80 font-bold tracking-wide underline underline-offset-1"
            onClick={() => {
              navigateTo('/auth/sign-up');
            }}>
            Đăng ký
          </span>
        </div>
        <Button
          isLoading={loadingSignIn}
          type="submit"
          className="mt-10 w-[200px] block mx-auto">
          Đăng Nhập
        </Button>
      </form>
    </div>
  );
};

export default SignInPage;
