import { useContext, useState } from "react";
import CartItem from "./CartItem/CartItem";
import Info from "./Info";
import AppContext from "../context";

function Drawer({ items = [], onClose, onRemove }) {
  const [isCompleted, setIsCompleted] = useState(false);
  const { setCarItems } = useContext(AppContext);
  const onClickOrder = () => {
    setIsCompleted(true);
    setCarItems([]);
  };
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="mb-30">
          Корзина
          <img
            onClick={onClose}
            className="removeBtn"
            src="/img/btn-remove.svg"
            alt="Sneakers"
          />
        </h2>

        {items.length > 0 ? (
          <>
            <div className="items">
              {items.map((el, i) => (
                <CartItem item={el} key={el.id} onRemove={onRemove} />
              ))}
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
              <button onClick={onClickOrder} className="greenButton">
                Оформить заказ <img src="/img/arrow.svg" alt="arrow" />
              </button>
            </div>
          </>
        ) : (
          <Info
            title={isCompleted ? "Заказ оформлен" : "Корзина пустая"}
            description={
              isCompleted
                ? "Ваш заказ оформлен"
                : "Добавьте хотя б одну пару кроссовок для заказа"
            }
            image={
              isCompleted ? "/img/complete-order.svg" : "/img/cart-empty.svg"
            }
          />
        )}
      </div>
    </div>
  );
}
export default Drawer;
