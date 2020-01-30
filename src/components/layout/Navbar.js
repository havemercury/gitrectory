import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ logo, subtitle, alt, title }) => {
  return (
    <header>
      <Link to='/'>
        <div className='logo'>
          <img src={logo} alt={alt} />
          <div className='logo-text'>
            {title}
            <br />
            <span className='desc'>{subtitle}</span>
          </div>
        </div>
      </Link>

      <nav>
        <ul>
          <li>
            <Link to='/'>
              <i className='fas fa-home'></i> Home
            </Link>
          </li>
          <li>
            <Link to='/about'>
              <i className='fas fa-info-circle'></i> About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

Navbar.defaultProps = {
  title: 'Gitrectory',
  subtitle: 'Find users on GitHub',
  logo: '../img/logo-sm.png',
  alt: 'Gitrectory Logo'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default Navbar;
