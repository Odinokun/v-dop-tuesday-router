import { Navigate, NavLink, Route, Routes } from 'react-router';
import { PageOne } from './pages/PageOne';
import { PageThree } from './pages/PageThree';
import { PageTwo } from './pages/PageTwo';
import { Error404 } from './pages/Error404';
import styles from './Site.module.css';

export const Site = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1>HEADER</h1>
      </div>

      <div className={styles.body}>
        <div className={styles.nav}>
          <nav>
            <NavLink
              to='/page-1'
              className={({ isActive }) =>
                isActive ? styles.active : styles.navLink
              }
              end
            >
              Adidas
            </NavLink>
            <NavLink
              to='/page-2'
              className={({ isActive }) =>
                isActive ? styles.active : styles.navLink
              }
              end
            >
              Puma
            </NavLink>
            <NavLink
              to='/page-3'
              className={({ isActive }) =>
                isActive ? styles.active : styles.navLink
              }
              end
            >
              Nike
            </NavLink>
          </nav>
        </div>
        <div className={styles.content}>
          <Routes>
            <Route path={'/'} element={<Navigate to={'/page-1'} />} />

            <Route path={'/page-1'} element={<PageOne />} />
            <Route path={'/page-2'} element={<PageTwo />} />
            <Route path={'/page-3'} element={<PageThree />} />

            <Route path={'/*'} element={<Error404 />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
