import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <div>
        <nav>
          <NavLink to='/'>Events Page</NavLink>
        </nav>
      </div>

      <main>
        <Outlet/>
      </main>
    </>
  );
};

export default Layout;
