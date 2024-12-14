import { Navigate, NavLink, Route, Routes } from 'react-router';
import { Page } from './pages/Page';
import { Error404 } from './pages/Error404';

import { linksState } from './state/links-state';
import './App.css';
import { pagesState } from './state/pages-state';

function App() {
  return (
    <div className='wrapper'>
      <header className='header'>
        <h2>Sneakers</h2>
      </header>

      <aside className='aside'>
        <nav>
          <ul>
            {linksState.map(l => {
              return (
                <li key={l.id}>
                  <NavLink to={`/page/${l.link}`} end>
                    {l.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      <main className='main'>
        <Routes>
          <Route path='/' element={<Navigate to={'/page/0'} />} />
          <Route
            path='/page/:link'
            element={<Page pages={pagesState.pages} />}
          />
          <Route path='/*' element={<Error404 />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
