import { Navigate, NavLink, Route, Routes } from 'react-router';
import { PageOne } from './pages/PageOne';
import { PageThree } from './pages/PageThree';
import { PageTwo } from './pages/PageTwo';
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
            <NavLink to='/' end>
              Home
            </NavLink>
            <NavLink to='/page-1' end>
              Adidas
            </NavLink>
            <NavLink to='/page-2' end>
              Puma
            </NavLink>
            <NavLink to='/page-3' end>
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
          </Routes>
        </div>
      </div>
    </div>
  );
};
