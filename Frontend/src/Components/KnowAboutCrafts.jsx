import styles from "./KnowAboutCrafts.module.css";

const KnowAboutCrafts = () => {
  return (
    <div className={styles.knowAboutCrafts} id="craft">
      <div className={styles.content}>
        <div className={styles.content1}>
          <div className={styles.text}>
            <div className={styles.header}>
              <div className={styles.knowAboutCrafts1}>Know About Crafts</div>
              <div className={styles.craftingLegaciesIgniting}>
                Crafting Legacies, Igniting Inspiration
              </div>
            </div>
            <div className={styles.areYouCurious}>
              Are you curious about the world of crafts and tradition? Join us
              on a journey of discovery where every creation tells a story, and
              every artisan is a guardian of culture. Immerse yourself in the
              rich tapestry of heritage and innovation as we celebrate the
              beauty of craftsmanship. Welcome to a world where the past meets
              the present, and where every craft is a treasure waiting to be
              explored.
            </div>
          </div>
          <button className={styles.button}>
            <div className={styles.content2}>
              <div className={styles.getStarted}>{`Know More `}</div>
            </div>
            <img
              className={styles.iconarrowRight}
              alt=""
              src="./images/iconarrowright.svg"
            />
          </button>
        </div>
        <div className={styles.images}>
          <div className={styles.imagePlaceholder}>
            <img
              className={styles.nakshiKatha1Icon}
              alt=""
              src="./images/nakshi-katha-1@2x.png"
            />
          </div>
          <div className={styles.imagePlaceholder1}>
            <img className={styles.saree11Icon} alt="" src="./images/saree1-1@2x.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowAboutCrafts;
