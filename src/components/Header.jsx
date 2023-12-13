import { Link } from "react-router-dom";

function Header({ onClickCart }) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={40} height={40} src="/img/logo.png" alt="logo" />
        <div>
          <h3 className="text-uppercase">React sneakers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="d-flex">
        <li className="mr-30 cu-p" onClick={onClickCart}>
          <img src="/img/cart.svg" alt="Корзина" />
          <span>1205 грн.</span>
        </li>
        <li className="mr-20 cu-p">
          <Link to="/favourites">
            <img src="/img/heart.svg" alt="Закладки" />
          </Link>
        </li>
        <li>
          <img src="/img/user.svg" alt="Пользователь" />
        </li>
      </ul>
    </header>
  );
}
export default Header;
