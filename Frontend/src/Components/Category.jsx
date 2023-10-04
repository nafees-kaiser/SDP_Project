import styles from "./Category.module.css";

const Category = () => {
  return (
    <div className={styles.category}>
      <div className={styles.category1} />
      <div className={styles.rectangleParent}>

        <b className={styles.shopByCategoryContainer}>
          <p className={styles.shopBy}>Shop By</p>
          <p className={styles.shopBy}>&nbsp;</p>
          <p className={styles.shopBy}> Category</p>
        </b>
      </div>
      <div className={styles.categoryyyy}>
        <div className={styles.pottery}>
          <div className={styles.potteryChild} />
          <img
            className={styles.beautifulClayPotsHandMadeIcon}
            alt=""
            src="./images/beautifulclaypotshandmadepotterydisplayroadsidehandicraftshopdhakabangladesh53840651-2@2x.png"
          />
          <button className={styles.piecescategoryTag}>
            <b className={styles.potteryCeramics}>{`Pottery & Ceramics`}</b>
          </button>
        </div>
        <div className={styles.textiles}>
          <div className={styles.potteryChild} />
          <button className={styles.piecescategoryTag1}>
            <b className={styles.potteryCeramics}>Handwoven Textiles</b>
          </button>
          <img
            className={styles.handwovenTextilesForSaleOnIcon}
            alt=""
            src="./images/handwoventextilesforsaleonthesidewalkinbuceriasnayaritmexicom23a3f-2@2x.png"
          />
        </div>
        <div className={styles.rattan}>
          <div className={styles.potteryChild} />
          <img
            className={styles.beautifulClayPotsHandMadeIcon}
            alt=""
            src="./images/dsc-0424-585230-2@2x.png"
          />
          <button className={styles.piecescategoryTag1}>
            <b className={styles.rattanProducts}>Rattan Products</b>
          </button>
        </div>
      </div>
      <div className={styles.arrows}>
        <button className={styles.button}>
          <img
            className={styles.iconarrowRight}
            alt=""
            src="./images/iconarrowright1.svg"
          />
        </button>
        <button className={styles.button1}>
          <img
            className={styles.iconarrowRight}
            alt=""
            src="./images/iconarrowleft1.svg"
          />
        </button>
      </div>
    </div>
  );
};


export default Category;


