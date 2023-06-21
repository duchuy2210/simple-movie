import React, { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from './Header';

const Main = () => {
  const { userData } = useSelector(state => state.auth);
  const navigateTo = useNavigate();
  useEffect(() => {
    if (!userData?.email) {
      navigateTo('/auth/sign-in');
    }
  }, [userData]);
  return (
    <Fragment>
      <Header></Header>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default Main;
