import React from 'react';
import { Outlet } from 'react-router-dom';
import { withErrorBoundary } from 'react-error-boundary';
import ErrorComponent from 'components/common/ErrorComponent';

const AuthLayout = () => {
  return (
    <div
      className="relative w-screen h-screen"
      style={{ maxHeight: '-webkit-fill-available' }}>
      <img
        src="/img/auth-bg.jpg"
        alt="auth-background"
        className="z-10 absolute inset-0 block w-full h-full object-center"
      />
      <div className="z-20 absolute inset-0 bg-black opacity-80">&nbsp;</div>
      <div className="z-30 absolute inset-0 flex justify-center items-center">
        <div className="relative bg-[#0f172a] rounded-2xl z-2 transition-all w-[90vw] max-w-[500px] px-8 py-[30px] text-main-blue">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default withErrorBoundary(AuthLayout, {
  FallbackComponent: ErrorComponent,
});
