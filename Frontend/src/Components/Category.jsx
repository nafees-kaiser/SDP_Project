import styles from "./Category.module.css";
// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const categories = [
//   {
//     title: 'Pottery & Ceramics',
//     image: './images/beautifulclaypotshandmadepotterydisplayroadsidehandicraftshopdhakabangladesh53840651-2@2x.png',
//   },
//   {
//     title: 'Handwoven Textiles',
//     image: './images/handwoventextilesforsaleonthesidewalkinbuceriasnayaritmexicom23a3f-2@2x.png',
//   },
//   {
//     title: 'Rattan Products',
//     image: './images/dsc-0424-585230-2@2x.png',
//   },
//   {
//     title: 'Jamdani saree',
//     image: './images/dsc-0424-585230-2@2x.png',
//   },
//   {
//     title: 'Wooden work',
//     image: './images/dsc-0424-585230-2@2x.png',
//   },
//   {
//     title: 'embroidered quilts',
//     image: './images/dsc-0424-585230-2@2x.png',
//   },
//   {
//     title: 'carpets',
//     image: './images/dsc-0424-585230-2@2x.png',
//   },
// ];

const Category = () => {

  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  // };

  return (
    <div className={styles.category}>
      <div className={styles.category1} />
      <div className={styles.rectangleParent}>

        <b className={styles.shopByCategoryContainer}>
          {/* <p className={styles.shopBy}><h4>Shop By</h4></p>
          <p className={styles.shopBy}>&nbsp;</p>
          <p className={styles.shopBy}> Category</p> */}
          <h1 style={
              {fontSize: '2em'}
            }>Shop By</h1>
          <br/>
          <h1 style={
              {fontSize: '2em'}
            }>Category</h1>
        </b>
      </div>

      <div className={styles.categoryyyy}>
      {/* <Slider {...settings}>
        {categories.map((category, index) => (
          <div key={index} className={styles.pottery}>
            <div className={styles.potteryChild} />
            <img
             className={styles.beautifulClayPotsHandMadeIcon}
             alt=""
             src={category.image}
            />
            <button className={styles.piecescategoryTag}>
              <b className={styles.potteryCeramics}>{category.title}</b>
            </button>
          </div>
        ))}
        </Slider> */}
        <div className={styles.pottery}>
          <div className={styles.potteryChild} />
          <img
            className={styles.beautifulClayPotsHandMadeIcon}
            alt=""
            src="./images/beautifulclaypotshandmadepotterydisplayroadsidehandicraftshopdhakabangladesh53840651-2@2x.png"
          />
          <button className={styles.piecescategoryTag}>
            <b className={styles.potteryCeramics}>Pottery & Ceramics</b>
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


