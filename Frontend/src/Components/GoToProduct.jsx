import styles from "./GoToProduct.module.css";
// import { Link } from "react-router-dom";
import Button from './Button.jsx';
import {useNavigate} from 'react-router-dom';

const GoToProduct = () => {
  const navigate= useNavigate();

  return (
    <div className={styles.sliderSection}>
      <div className={styles.imagePlaceholder}>
        <img className={styles.picture1Icon} alt="" src="./images/picture-1@2x.png" />
      </div>
      <div className={styles.content}>
        <div className={styles.text}>
              <h5>Crafting Dreams, Connecting Hearts.</h5>
            
          <div className={styles.keepYourEveryday}>
            Explore our curated collection of heritage-rich and innovative
            crafts, lovingly crafted by skilled artisans from around the country.
          </div>
        </div>

        {/* <Link to={`/product-listing`} className={styles.button}> */}
          <div className={styles.getStarted}>
          <Button 
          text="See Collection"
          change={()=>navigate('/product-listing')}
          />
            {/* See Collection */}
          </div>
          {/* <img
            className={styles.iconarrowRight1}
            alt=""
            src="./images/iconarrowright6.svg"
          /> */}
        {/* </Link> */}
      </div>
    </div>
  );
};

export default GoToProduct;
