// == Import
import Facebook from '../../../images/icon-facebook.svg';
import Instagram from '../../../images/icon-instagram.svg';
import Twitter from '../../../images/icon-twitter.svg';
import Pinterest from '../../../images/icon-pinterest.svg';
import Logo from '../../../images/logo.svg';
import './style.scss';

// == Component
const Footer = () => (
  <div className="footer-wrapper">
    <img className="footer-logo" src={Logo} alt="sunnyside logo" />
    <div className="footer-menu">
      <a id="about" className="footer-menu-item">About</a>
      <a id="services" className="footer-menu-item">Services</a>
      <a id="projects" className="footer-menu-item">Projects</a>
    </div>
    <div className="footer-social">
      <img id="facebook" className="footer-social-item" src={Facebook} alt="facebook" />
      <img id="instagram" className="footer-social-item" src={Instagram} alt="instagram" />
      <img id="twitter" className="footer-social-item" src={Twitter} alt="twitter" />
      <img id="pinterest" className="footer-social-item" src={Pinterest} alt="pinterest" />
    </div>
  </div>
);

// == Export
export default Footer;
