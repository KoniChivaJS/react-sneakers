import { useState } from 'react';
import styles from './Card.module.scss'

function Card({item,onPlus}){
    const [isAdded,setIsAdded] = useState(false);

    const onClickPlus = () => {
        onPlus(item);
        setIsAdded(!isAdded);
    }
    const {title,price,imageUrl} = item;
    return(
        <div className={styles.card}>
            <div className={styles.favourite}>
                <img src="/img/heart-unliked.svg" alt="Unliked" />
            </div>
            <img width={133} height={112} src={imageUrl} alt="sneakers" />
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>{price} грн.</b>
            </div>
            <img className={styles.plus} onClick={onClickPlus} src={isAdded ? "/img/btn-checked.svg" : "/img/plus.svg"} alt="plus" />
            </div>
        </div>
    )
}

export default Card;