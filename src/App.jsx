import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer"
import { useEffect, useState } from "react";


function App() {

  const [items,setItems] = useState([]);
  const [cartItems,setCarItems] = useState([]);
  const [cartOpened,setCartOpened] = useState(false);

  useEffect(()=>{
  fetch('https://656fa4806529ec1c62381c41.mockapi.io/items')
  .then(res => {
    return res.json();
  })
  .then(json => {
    setItems(json);
  })
  },[])

  const onAddToCart = (item) => {
    if(cartItems.includes(item)){
      const filteredCart = cartItems.filter((el)=>el.title!=item.title);
      setCarItems(filteredCart);
      return;
    }

    setCarItems(prev=>[...prev,item]);
  }


  return (
    <div className="wrapper clear">
      {
        cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)}/>
      }
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {
            items.map((item)=>(
              <Card 
                item={item}
                onPlus={(obj)=>onAddToCart(obj)}
                />
            ))
          }
        </div>

      </div>
    </div>
  );
}

export default App;
