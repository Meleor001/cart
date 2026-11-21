import img from "./calm.png"
function Cart({ cartItems }) {

  return (
      <div className="cart">
      <h1>Корзина</h1>
      {cartItems.length == 0 ? <div className="cart_font">Тележка пустая <img className="img_cartt" src={img}/></div> : cartItems.map((ele) => {
        return (
          <div className="cart_item">
          <div className="cart_img ">
          <img src={ele.image}/> 
          </div>
          <div className="cart_title">{ele.brand}
          <div className="cart_btn">
          <button>+</button>0<button>-</button>
          </div>
          <div className="cart_price">Цена: {ele.price}</div>

          <p className="cart_null">❌</p>
          </div>
          </div>
        )
      })}
      </div>
  );
}

export default Cart;
