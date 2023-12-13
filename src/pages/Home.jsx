import { useContext } from "react";
import Card from "../components/Card/Card";
import AppContext from "../context";

function Home({
  items,
  term,
  onChangeSearchInput,
  onAddToCart,
  onAddToFavourite,
  isLoading,
}) {
  const renderItems = () => {
    const filteredItems = items.filter((item) =>
      item.title.toLowerCase().includes(term.toLowerCase())
    );
    return (isLoading ? [...Array(4)] : filteredItems).map((item, index) => (
      <Card
        key={item?.id}
        item={item}
        onPlus={(obj) => onAddToCart(obj)}
        onFavourite={(obj) => onAddToFavourite(obj)}
        loading={isLoading}
        {...item}
      />
    ));
  };

  return (
    <>
      <div className="d-flex align-center justify-between mb-40">
        <h1>{term ? `Поиск по запросу: ${term}` : "Все кроссовки"}</h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search" />
          <input
            type="text"
            placeholder="Поиск..."
            onChange={onChangeSearchInput}
          />
        </div>
      </div>

      <div className="d-flex flex-wrap">{renderItems()}</div>
    </>
  );
}

export default Home;
