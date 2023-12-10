import Card from "../components/Card/Card";
function Home({items,term,onChangeSearchInput,onAddToCart,onAddToFavourite}){
    return(
        <>
            <div className="d-flex align-center justify-between mb-40">
                <h1>{ term ? `Поиск по запросу: ${term}` : "Все кроссовки" }</h1>
                <div className="search-block d-flex">
                <img src="/img/search.svg" alt="Search" />
                <input type="text" placeholder="Поиск..." onChange={onChangeSearchInput}  />
                </div>
            </div>

            <div className="d-flex flex-wrap">
                {
                items.filter(item=>item.title.toLowerCase().includes(term.toLowerCase())).map((item,index)=>(
                    <Card 
                    key={item.id}
                    item={item}
                    onPlus={(obj)=>onAddToCart(obj)}
                    onFavourite={(obj)=>onAddToFavourite(obj)}
                    />
                ))
                }
            </div>
        </>
    )
}

export default Home;