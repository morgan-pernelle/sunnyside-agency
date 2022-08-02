// == Import
import Emily from '../../../images/image-emily.jpg';
import Thomas from '../../../images/image-thomas.jpg';
import Jennie from '../../../images/image-jennie.jpg';
import './style.scss';

// == Component
const Reviews = () => (
  <div className="reviews-wrapper">
    <h2 className="reviews-title">Client Testimonials</h2>
    <div className="reviews-item">
      <img className="reviews-item-picture" src={Emily} alt="user avatar" />
      <p className="reviews-item-text">We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
      <p className="reviews-item-user">Emily R.</p>
      <p className="reviews-item-position">Marketing Director</p>
    </div>
    <div className="reviews-item">
      <img className="reviews-item-picture" src={Thomas} alt="user avatar" />
      <p className="reviews-item-text">Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.</p>
      <p className="reviews-item-user">Thomas S.</p>
      <p className="reviews-item-position">Chief Operating Officer</p>
    </div>
    <div className="reviews-item">
      <img className="reviews-item-picture" src={Jennie} alt="user avatar" />
      <p className="reviews-item-text">Incredible end result ! Our sales increased over 400% when we worked with Sunnyside. Highly recommended !</p>
      <p className="reviews-item-user">Jennie F.</p>
      <p className="reviews-item-position">Business Owner</p>
    </div>
  </div>
);

// == Export
export default Reviews;
