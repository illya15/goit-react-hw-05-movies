import css from './Header.module.css'


import { Link} from 'react-router-dom';
const Header = () => {
  return (
    <div className={css.conteiner}>
      <nav className={css.list}>
      
          <li>
            <Link to={'/'}>Home</Link>
          </li>
           <li>
            <Link to={'/movies'}>Movies</Link>
          </li>
        
      </nav>
      {' '}
    </div>
  );
};


export default Header;
