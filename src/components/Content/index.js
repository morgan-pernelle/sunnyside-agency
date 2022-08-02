// == Import
import Egg from '../../../images/mobile/image-transform.jpg';
import Glass from '../../../images/mobile/image-stand-out.jpg';
import './style.scss';

// == Component
const Content = () => (
  <div className="content-wrapper">
    <div className="content-egg">
      <img src={Egg} alt="egg on yellow background" />
    </div>
    <div className="content-brand">
      <h2 className="content-brand-title">Transform your <br />brand</h2>
      <p className="content-brand-desc">We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
      <a className="content-brand-link">Learn More</a>
    </div>
    <div className="content-glass">
      <img src={Glass} alt="egg on yellow background" />
    </div>
    <div className="content-audience">
      <h2 className="content-audience-title">Stand out to the <br />right audience</h2>
      <p className="content-audience-desc">Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.</p>
      <a className="content-audience-link">Learn More</a>
    </div>
    <div className="content-cherry">
      <div className="content-cherry-wrapper">
        <h2 className="content-cherry-title">Graphic Design</h2>
        <p className="content-cherry-desc">Great design make you memorable. We deliver artwork that underscores your brand message and captures potential client's attention.</p>
      </div>
    </div>
    <div className="content-orange">
      <div className="content-orange-wrapper">
        <h2 className="content-orange-title">Photography</h2>
        <p className="content-orange-desc">Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
      </div>
    </div>
  </div>
);

// == Export
export default Content;
