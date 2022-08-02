// == Import
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import { useState } from 'react';
import Logo from '../../../images/logo.svg';
import Arrow from '../../../images/icon-arrow-down.svg';
import './style.scss';

// == Component
const Header = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);

  const handleToggle = () => {
    setBurgerOpen(!burgerOpen);
  };

  const closeMenu = () => {
    setBurgerOpen(false);
  };

  return (
    <div className="header-wrapper">
      <div className="header-topbar">
        <div className="header-logo">
          <img src={Logo} alt="sunnyside logo" />
        </div>
        <div className="header-nav">
          <div className="header-burger">
            <button type="button" onClick={handleToggle}>{burgerOpen ? (<MdClose style={{ color: '#fff', width: '40px', height: '40px' }} />) : (<FiMenu style={{ color: '#fff', width: '40px', height: '40px' }} />)}</button>
            <ul className={`header-burger-menu ${burgerOpen ? ' show-menu' : ''}`}>
              <li className="header-burger-menu-item"><a onClick={() => closeMenu()} href="#" id="about">About</a></li>
              <li className="header-burger-menu-item"><a onClick={() => closeMenu()} href="#" id="services">Services</a></li>
              <li className="header-burger-menu-item"><a onClick={() => closeMenu()} href="#" id="projects">Projects</a></li>
              <li className="header-burger-menu-item"><a onClick={() => closeMenu()} href="#" id="contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="header-title">
        <h1>We are creatives</h1>
        <img className="header-title-arrow" src={Arrow} alt="arrow down" />
      </div>
    </div>
  );
};

// == Export
export default Header;
