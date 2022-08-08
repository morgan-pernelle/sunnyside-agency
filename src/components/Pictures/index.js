// == Import
import Milk from '../../../images/mobile/image-gallery-milkbottles.jpg';
import Orange from '../../../images/mobile/image-gallery-orange.jpg';
import Cone from '../../../images/mobile/image-gallery-cone.jpg';
import Sugar from '../../../images/mobile/image-gallery-sugar-cubes.jpg';
import './style.scss';

// == Component
const Pictures = () => (
  <div className="pictures-wrapper">
    <img className="pictures-item" src={Milk} alt="milkbottles" />
    <img className="pictures-item" src={Orange} alt="orange in a plate" />
    <img className="pictures-item" src={Cone} alt="milkbottles" />
    <img className="pictures-item" src={Sugar} alt="milkbottles" />
  </div>
);

// == Footer
export default Pictures;
