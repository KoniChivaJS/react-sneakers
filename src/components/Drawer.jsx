import CartItem from "./CartItem/CartItem";

function Drawer({items=[],onClose}){

    return(
        <div  className="overlay">
            <div className="drawer">
            <h2 className="mb-30">Корзина<img onClick={onClose} className="removeBtn" src="/img/btn-remove.svg" alt="Sneakers" /></h2>
            <div className="items">
                {
                    items.map((el) => (
                        <CartItem item={el}/>
                    ))
                }
            </div>
            <div className="cartTotalBlock">
                <ul>
                <li>
                    <span>Итого:</span>
                    <div></div>
                    <b>21 498 грн.</b>
                </li>
                <li>
                    <span>Налог 5%:</span>
                    <div></div>
                    <b>1074 грн.</b>
                </li>
                </ul>
                <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="arrow" /></button>
            </div>

            </div>
        </div>
    )
}
export default Drawer;