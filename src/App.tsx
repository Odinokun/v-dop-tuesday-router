import { NavLink } from 'react-router';
import './App.css';
import { linksState } from './state/links-state';

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
                <li>
                  <NavLink key={l.id} to={l.title} end>
                    {l.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      <main className='main'>Body</main>
    </div>
  );
}

export default App;
