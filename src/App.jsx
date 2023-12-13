import axios from "axios";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import AppContext from "./context";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCarItems] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [term, setTerm] = useState("");
  const [cartOpened, setCartOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const itemsResponse = await axios.get(
        "https://656fa4806529ec1c62381c41.mockapi.io/items"
      );
      const cartResponse = await axios.get(
        "https://656fa4806529ec1c62381c41.mockapi.io/cart"
      );

      setIsLoading(false);
      setItems(itemsResponse.data);
      setCarItems(cartResponse.data);
    }
    fetchData();
  }, []);

  const onAddToCart = (item) => {
    try {
      if (cartItems.find((cartObj) => Number(cartObj.id) === Number(item.id))) {
        axios.delete(
          `https://656fa4806529ec1c62381c41.mockapi.io/cart/${item.id}`
        );
        setCarItems((prev) =>
          prev.filter((cartObj) => Number(cartObj.id) != Number(item.id))
        );
      } else {
        axios.post("https://656fa4806529ec1c62381c41.mockapi.io/cart", item);
        setCarItems((prev) => [...prev, item]);
      }
    } catch (error) {
      console.log("Не удалось добавить в корзину");
    }
  };

  const onRemoveItem = (id) => {
    try {
      axios.delete(`https://656fa4806529ec1c62381c41.mockapi.io/cart/${id}`);
      setCarItems((prev) => prev.filter((item) => item.id != id));
    } catch (error) {
      console.log("Ошибка: ", error);
    }
  };

  const onChangeSearchInput = (event) => {
    setTerm(event.target.value);
  };

  const onAddToFavourite = (item) => {
    if (favourites.includes(item)) {
      setFavourites((prev) => prev.filter((obj) => obj.id != item.id));
      return;
    }

    setFavourites((prev) => [...prev, item]);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favourites,
        isItemAdded,
        onAddToFavourite,
        setCartOpened,
        setCarItems,
      }}
    >
      <div className="wrapper clear">
        {cartOpened && (
          <Drawer
            items={cartItems}
            onClose={() => setCartOpened(false)}
            onRemove={onRemoveItem}
          />
        )}
        <Header onClickCart={() => setCartOpened(true)} />
        <div className="content p-40">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  items={items}
                  cartItems={cartItems}
                  term={term}
                  onChangeSearchInput={onChangeSearchInput}
                  onAddToCart={onAddToCart}
                  onAddToFavourite={onAddToFavourite}
                  isLoading={isLoading}
                />
              }
            />

            <Route
              path="/favourites"
              element={<Favourites onAddToCart={onAddToCart} />}
            />
          </Routes>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
