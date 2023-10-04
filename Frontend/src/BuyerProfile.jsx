import Footer from "./Components/Footer";
import CraftForm from "./Components/CraftForm.jsx"
import Form from "./Components/Form";
import styles from "./BuyerProfile.module.css";

const BuyerProfile = () => {
  return (
    <div className={styles.buyerProfile}>
      <CraftForm />
      <div className={styles.border} />
      
      <div className={styles.border1} />
      <div className={styles.pageHeader}>
        <div className={styles.content}>
          <div className={styles.pageTitle}>Your Profile</div>
        </div>
      </div>

      <Form />
      <div className={styles.footer}>
      <Footer /> </div>
      <div className={styles.pictureName}>
        <input
          className={styles.emmanuelOyiboke}
          value="Shahabuddin Akhon"
          placeholder="Shahabuddin Akhon"
          type="text"
          defaultValue="Shahabuddin Akhon"
        />
        <img
          className={styles.pictureNameChild}
          alt=""
          src="./images/ellipse-909@2x.png"
        />
        <button className={styles.pictureNameInner}>
          <div className={styles.parent}>
            <div className={styles.div}>+</div>
            <div className={styles.changePhoto}>Change photo</div>
          </div>
        </button>
      </div>
      
      
    </div>
  );
};

export default BuyerProfile;
