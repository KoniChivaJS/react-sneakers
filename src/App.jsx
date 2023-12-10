import Card from "./components/Card/Card";
import axios from "axios";
import Header from "./components/Header";
import Drawer from "./components/Drawer"
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import { useEffect, useState } from "react";
import {Routes, Route } from "react-router-dom";

function App() {

  const [items,setItems] = useState([]);
  const [cartItems,setCarItems] = useState([]);
  const [favourites,setFavourites] = useState([]);
  const [term,setTerm] = useState('');
  const [cartOpened,setCartOpened] = useState(false);

  useEffect(()=>{
    axios.get('https://656fa4806529ec1c62381c41.mockapi.io/items')
      .then(res => {
        setItems(res.data);
      })
    axios.get('https://656fa4806529ec1c62381c41.mockapi.io/cart')
      .then(res => {
        setCarItems(res.data);
      })

  },[])

  const onAddToCart = (item) => {
    axios.post('https://656fa4806529ec1c62381c41.mockapi.io/cart',item);
    setCarItems(prev=>[...prev,item]);
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://656fa4806529ec1c62381c41.mockapi.io/cart/${id}`);
    setCarItems(prev=>prev.filter(item=>item.id != id));
  }

  const onChangeSearchInput = (event) => {
    setTerm(event.target.value);
  }

  const onAddToFavourite = (item) => {
    if(favourites.includes(item)){
      setFavourites(prev=>prev.filter(obj=>obj.id!=item.id));
      return;
    }

    setFavourites(prev=>[...prev,item]);
  }


  return (
    <div className="wrapper clear">
      {
        cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}/>
      }
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">

        <Routes>

          <Route path="/" 
            element={<Home 
              items={items} 
              term={term} 
              onChangeSearchInput={onChangeSearchInput} 
              onAddToCart={onAddToCart}
              onAddToFavourite={onAddToFavourite}
            />}
          />

          <Route path="/favourites" 
            element={
              <Favourites 
                favourites={favourites}
                onAddToCart={onAddToCart}
                onAddToFavourite={onAddToFavourite}
              />
            }
          />

        </Routes>


      </div>
    </div>
  );
}

export default App;
