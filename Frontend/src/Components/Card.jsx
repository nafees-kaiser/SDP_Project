import style from './Card.module.css'
import { ShowStar } from './RatingStars';
export default function Card({image,rating,productName,location,price}) {
    return (
        <div className={style.card}>
            <img src={image} alt={productName} />
            <div className={style['div-info']}>
                {/* <p>{rating}</p> */}
                <ShowStar rating={rating} sz={25}/>
                <p>{productName}</p>
                <p>{location}</p>
                <p>{price}</p>
            </div>
        </div>
    );
}