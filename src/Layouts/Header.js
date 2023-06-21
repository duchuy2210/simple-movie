import { Button } from 'components/button';
import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { actionThisUserData } from 'store/auth/authAction';
import { forceSignOut } from 'store/store';
const Header = () => {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const navList = [
    {
      to: '/',
      title: 'Movies',
    },
    {
      to: '/tv',
      title: 'Tv Series',
    },
    {
      to: '/movie',
      title: 'Movie List',
    },
  ];
  const handleSignOut = () => {
    forceSignOut();
    navigateTo('/auth/sign-in');
  };
  const handleGetProfile = () => {
    dispatch(actionThisUserData());
  };
  return (
    <Fragment>
      <header className="header flex items-center justify-center gap-x-5 text-white py-10 mb-10">
        {navList.map((item, index) => {
          return (
            <NavLink
              to={item.to}
              className={({ isActive }) => (isActive ? 'text-primary' : '')}
              key={index}>
              {item.title}
            </NavLink>
          );
        })}
        <Button onClick={handleSignOut}>Sign Out</Button>
        <Button onClick={handleGetProfile}>Profile</Button>
      </header>
    </Fragment>
  );
};

export default Header;
