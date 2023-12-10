
function CartItem({item,onRemove}){
    return(
        <div className="cartItem d-flex align-center mb-20">
            <div style={{ backgroundImage: `url(${item.imageUrl})` }} className="cartItemImg"></div>
            <div className="mr-20 flex">
                <p className="mb-5">{item.title}</p>
                <b>{item.price} грн.</b>
            </div>
            <img className="removeBtn" onClick={()=>onRemove(item.id)} src="/img/btn-remove.svg" alt="Sneakers" />
        </div>
    )
}
export default CartItem;