import React, { Fragment } from 'react';
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <Fragment>
      <header className='header flex items-center justify-center gap-x-5 text-white py-10 mb-10'>
        <span>TV Series</span>
        <span>Movie</span>
        <span>Porn</span>
      </header>
      <section className='banner h-[350px] page-container'>
        <div className="h-full w-full bg-white rounded-lg mx-auto relative">
          <img className='object-cover w-full h-full rounded-lg' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/c34aad2e-28ce-42c3-84f4-dbbc7c2eecc7/d7kcsff-a93808f4-cd7a-4a09-84c2-30288495fbd5.png" alt="banner" />
          <div className="content absolute text-white left-5 bottom-5">
            <h2 className='font-bold text-3xl mb-5'>Avenger</h2>
            <div className="flex items-center justify-center gap-x-3"></div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Header;