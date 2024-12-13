import { Navigate, NavLink, Route, Routes } from 'react-router';
import { PageOne } from './pages/PageOne';
import { PageThree } from './pages/PageThree';
import { PageTwo } from './pages/PageTwo';
import { Error404 } from './pages/Error404';
import styles from './Site.module.css';
import styled from 'styled-components';

export const Site = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1>HEADER</h1>
      </div>

      <div className={styles.body}>
        <div className={styles.nav}>
          <nav className={NavWrapper}>
            {/* <NavLink to='/page-1' className={({ isActive }) => isActive ? styles.active : styles.navLink} end >Test</NavLink> */}
            <NavWrapper>
              <NavLink to='/page-1' end>
                Adidas
              </NavLink>
            </NavWrapper>

            <NavWrapper>
              <NavLink to='/page-2' end>
                Puma
              </NavLink>
            </NavWrapper>

            <NavWrapper>
              <NavLink to='/page-3' end>
                Nike
              </NavLink>
            </NavWrapper>
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

const NavWrapper = styled.nav`
  margin-left: 10px;
  font-size: 20px;
  padding: 10px;
  & > a {
    padding: 5px;
    text-decoration: none;
    color: chocolate;
    transition: all 0.3s;
  }

  & > a.active {
    color: #067539;
    text-decoration: dashed;
  }

  & > a:hover {
    color: steelblue;
  }
`;
