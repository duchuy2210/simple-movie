import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
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
      </header>
    </Fragment>
  );
};

export default Header;
