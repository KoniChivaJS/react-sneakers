import { useContext } from "react";
import Card from "../components/Card/Card";
import { Link } from "react-router-dom";
import AppContext from "../context";

function Favourites({ onAddToCart }) {
  const { favourites, onAddToFavourite } = useContext(AppContext);
  console.log(favourites);
  return (
    <>
      <div className="d-flex align-centermb-40">
        <Link to="/">
          <img src="/img/arrow-back.svg" alt="Назад" className="mr-20" />
        </Link>
        <h1>Мои закладки</h1>
      </div>

      <div className="d-flex flex-wrap">
        {favourites.map((item, index) => (
          <Card
            key={item.id}
            item={item}
            onPlus={(obj) => onAddToCart(obj)}
            onFavourite={(obj) => onAddToFavourite(obj)}
            favourited={true}
            {...item}
          />
        ))}
      </div>
    </>
  );
}
export default Favourites;
