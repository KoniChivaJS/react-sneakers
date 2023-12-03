import styles from './Card.module.scss'

function Card({title,price,imageUrl,onClick}){

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
            <button className="button" onClick={onClick}>
                <img src="/img/plus.svg" alt="plus" />
            </button>
            </div>
        </div>
    )
}

export default Card;