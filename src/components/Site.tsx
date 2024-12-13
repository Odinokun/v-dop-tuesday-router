import { Navigate, NavLink, Route, Routes } from 'react-router';
import { Page } from './pages/Page';
import { Error404 } from './pages/Error404';
import styles from './Site.module.css';
// import styled from 'styled-components';
import { S } from './pages/__styles';

import { dataState } from '../data/dataState';

type LinkType = {
  id: number;
  title: string;
};

const linksArray: LinkType[] = [
  {
    id: 0,
    title: 'Adidas',
  },
  {
    id: 1,
    title: 'Puma',
  },
  {
    id: 2,
    title: 'Nike',
  },
];

export const Site = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1>HEADER</h1>
      </div>

      <div className={styles.body}>
        <div className={styles.nav}>
          <nav>
            {/* <NavLink to='/page-1' className={({ isActive }) => isActive ? styles.active : styles.navLink} end >Test</NavLink> */}
            {linksArray.map(link => (
              <S.NavWrapper key={link.id}>
                <NavLink to={`/page/${link.id}`} end>
                  {link.title}
                </NavLink>
              </S.NavWrapper>
            ))}
          </nav>
        </div>
        <div className={styles.content}>
          <Routes>
            <Route path={'/'} element={<Navigate to={'/page/1'} />} />
            {/* <Route path={'/page-1'} element={<PageOne />} /> */}

            <Route
              path={'/page/:link'}
              element={<Page pages={dataState.pages} />}
            />

            <Route path={'/*'} element={<Error404 />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

// const NavWrapper = styled.nav`
//   margin-left: 10px;
//   font-size: 20px;
//   padding: 10px;

//   & > a {
//     padding: 5px;
//     text-decoration: none;
//     color: chocolate;
//     transition: all 0.3s;
//   }

//   & > a.active {
//     color: #067539;
//     text-decoration: dashed;
//   }

//   & > a:hover {
//     color: steelblue;
//   }
// `;
