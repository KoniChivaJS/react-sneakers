import CartItem from "./CartItem/CartItem";

function Drawer({items=[],onClose,onRemove}){

    return(
        <div  className="overlay">
            <div className="drawer">
            <h2 className="mb-30">Корзина<img onClick={onClose} className="removeBtn" src="/img/btn-remove.svg" alt="Sneakers" /></h2>
            
            {
                items.length > 0
                ?    <>
                        <div className="items">
                            {
                                items.map((el,i) => (
                                    <CartItem item={el} key={el.id} onRemove={onRemove}/>
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
                    </>
                
                :   <div className="cartEmpty d-flex align-center justify-center flex-column flex">
                        <img className="mb-20" width={120} height={120} src="/img/cart-empty.svg" alt="cartEmpty" />
                        <h2>Корзина пустая</h2>
                        <button onClick={onClose} className="greenButton">
                            <img className="mr-10" src="/img/arrow.svg" alt="Arrow" />
                            Вернуться назад
                       </button>
                     </div>
            }
            </div>
        </div>
    )
}
export default Drawer;