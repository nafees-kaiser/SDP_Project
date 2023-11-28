import styles from "./Category.module.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const categories = [
  {
    title: 'Pottery',
    image: './images/beautifulclaypotshandmadepotterydisplayroadsidehandicraftshopdhakabangladesh53840651-2@2x.png',
  },
  {
    title: 'Bedsheets and Katha',
    image: './images/handwoventextilesforsaleonthesidewalkinbuceriasnayaritmexicom23a3f-2@2x.png',
  },
  {
    title: 'Furniture',
    image: './images/furniture.jpg',
  },
  {
    title: 'Saree',
    image: './images/384207015_834271585101077_2032535910196640642_n.jpg',
  },
  {
    title: 'Utensils',
    image: './images/utensil.jpg',
  },
  {
    title: 'Jewelry',
    image: './images/jewelry.jpg',
  },
  {
    title: 'Mats and Rugs',
    image: './images/mat.jpg',
  },
  {
    title: 'Home Decor',
    image: './images/homedecor.jpg',
  },
  {
    title: 'Mufler/Scurf',
    image: './images/muffler.jpg',
  },
  {
    title: 'Kurta/Punjabi',
    image: './images/Panjabi.jpg',
  },
  {
    title: 'Fotua/Salware Kameez',
    image: './images/Salwar-Kameez.jpg',
  },
  {
    title: 'Pant/Pajama',
    image: './images/pant.jpg',
  },
  {
    title: 'Lungi',
    image: './images/lungi.jpeg',
  },
  {
    title: 'Flower Vase',
    image: './images/flowervase.webp',
  },
  {
    title: 'Footwear',
    image: './images/juta.jpg',
  },
  {
    title: 'Musical Instrument',
    image: './images/music.jpg',
  },
  {
    title: 'Painting',
    image: './images/arts.jpg',
  },
  {
    title: 'Cap/Hat/Pagri',
    image: './images/Cap.png',
  },
  {
    title: 'Bags',
    image: './images/bag.jpg',
  },
  {
    title: 'WoodBlock Printing',
    image: './images/woodblock.jpg',
  },
  {
    title: 'Conch Shell Craft',
    image: './images/conchshell.jpg',
  },
];

const Category = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.shopByCategoryContainer}>
      <div className={styles.titleBox}>
        <h1 className={styles.title}>Shop by Category</h1>
      </div>
      <Slider {...settings} className={styles.carousel}>
        {categories.map((item, index) => (
          <div key={index} className={styles.carouselItem}>
            <img src={item.image} alt={item.title} />
            <button className={styles.productButton}>{item.title}</button>
          </div>
        ))}
      </Slider>
    </div>
  );
};


export default Category;


