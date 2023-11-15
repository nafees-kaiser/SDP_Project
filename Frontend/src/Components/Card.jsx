import style from './Card.module.css'
export default function Card({image,review,productName,location,price}) {
    return (
        <div className={style.card}>
            <img src={image} alt={productName} />
            <div className={style['div-info']}>
                <p>{review}</p>
                <p>{productName}</p>
                <p>{location}</p>
                <p>{price}</p>
            </div>
        </div>
    );
}

export function SellerCard({image,review,productName,location,price,storedQuantity}) {
    return (
        <div className={style.card}>
            <img src={image} alt={productName} />
            <div className={style['div-info']}>
                <p>{review}</p>
                <p>{productName}</p>
                <p>{location}</p>
                <p>{price}</p>
                <p>{storedQuantity}</p>
            </div>
        </div>
    );
}