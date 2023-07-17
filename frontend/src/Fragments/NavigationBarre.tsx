import React, { FunctionComponent, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCancel } from '@fortawesome/free-solid-svg-icons';
import '../styles/home.scss';

const Navbar: FunctionComponent = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      const isScrolling = currentPosition < prevScrollPosition;

      setIsScrolled(isScrolling || currentPosition === 0);
      setPrevScrollPosition(currentPosition);
    }
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [prevScrollPosition])
  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };
  
  const handleMouseLeave = () => {
    setMenuOpen(false);
  };

    return (
      <div className="nav">
        <nav className={isScrolled ?  "" : "nav scrolled"}>
          <ul>
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about">
                A propos
              </Link>
            </li>
            <li>
              <Link to="/posts">
                Postes
              </Link>
            </li>
            <li>
              <Link to="/status">
                Status
              </Link>
            </li>
            <li>
              <Link to="/offres">
                Offres
              </Link>
            </li>
            <li>
              <Link to="/events">
                Events
              </Link>
            </li>
          </ul>
        </nav>
        
        <div className="menu-sm">
          <button className="menu-btn" onClick={handleMenuClick}>
            <FontAwesomeIcon icon={menuOpen? faCancel : faBars} className="menu-icon" />
          </button>

          <nav className={menuOpen ? 'block': 'hidden'} onDoubleClick={handleMouseLeave}>
            <ul>
              <li>
                <Link to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about">
                  A propos
                </Link>
              </li>
              <li>
                <Link to="/posts">
                  Postes
                </Link>
              </li>
              <li>
                <Link to="/status">
                  Status
                </Link>
              </li>
              <li>
                <Link to="/offres">
                  Offres
                </Link>
              </li>
              <li>
                <Link to="/events">
                  Events
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="login">
          <Link to="/login" className="login-link">
            Se connecter
          </Link>
          <Link to="/register">
            S'inscrire
          </Link>
        </div>

      </div>
    );
  };

  export default Navbar;