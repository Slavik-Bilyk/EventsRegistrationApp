import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './Layout.module.css'

const Layout = () => {
  return (
    <>
      <div className={styles.container} >
        <nav>
          <NavLink to='/'>Events Pages</NavLink>
        </nav>
      </div>

      <main className={styles.container}>
        <Outlet/>
      </main>
    </>
  );
};

export default Layout;
