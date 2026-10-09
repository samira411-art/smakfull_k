import { Link } from 'react-router-dom';
import { IoHomeOutline, IoSearchOutline, IoHeartOutline, IoInformationCircleOutline } from 'react-icons/io5';
import { GiCookingPot } from 'react-icons/gi';
import '../App.css';

function Header() {
  return (
    <header className="header">
      <nav className="nav-container">
        <Link to="/" className="nav-logo">
          <GiCookingPot className="logo-icon" />
          <span>Smakfull</span>
        </Link>
        
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <IoHomeOutline className="nav-icon" />
              <span>Hem</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/search" className="nav-link">
              <IoSearchOutline className="nav-icon" />
              <span>Sök</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/favorites" className="nav-link">
              <IoHeartOutline className="nav-icon" />
              <span>Favoriter</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              <IoInformationCircleOutline className="nav-icon" />
              <span>Om</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
