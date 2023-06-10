import { Button } from 'components/button';
import { Input, InputTogglePassWord } from 'components/form';
import { Heading } from 'components/Heading';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
  const navigateTo = useNavigate();
  const { handleSubmit, control } = useForm({});
  return (
    <div className="">
      <Heading as="h2" text="ĐĂNG NHẬP" className="text-center" />
      <form action="">
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
      </form>
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
        isLoading={false}
        type="submit"
        className="mt-10 w-[200px] block mx-auto">
        Đăng Nhập
      </Button>
    </div>
  );
};

export default SignInPage;
