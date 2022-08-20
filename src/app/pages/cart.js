import { useCart } from "../components/cart-context";
import { Link } from "react-router-dom";
// import { useReducer } from "react";
import "../components/product-card.css";
import "./pages.css";

export default function Cart({ item }) {
  const { cartItem, setCartItem, wishItem, setWishItem } = useCart();
  function reducer(sum,cartItem){
    return sum+cartItem.price*cartItem.quantity;
  }
  return (
    <div className="Cart">
      {cartItem.length < 1 ?
      <div>
        <img style={{height: "300px"}} src="./icons/Error.png" alt="empty"></img>
        <h2>OOPS! The Cart is Empty</h2>
        <Link className="menu-link" to="/products">
          <button className="home-cta-btn">
            <div className="cta-sub-div">
            <h2 className="cta-text"> Let's Shop!!</h2>
            </div>
          </button>
        </Link>
      </div> 
      :
      <div>
        <div style={{alignContent:"left", margin: "0"}}>
        <h1 className="totalPrice">Total Price: ₹{cartItem.reduce(reducer,0)}</h1>
        </div>
        <div className="all-products">
          {cartItem.map((item) => (
            <div key={item.id} className="ProductCardCart">
              <div className="img-wish">
                <div className="prod-img">
                  <img
                    alt="temporary pics"
                    src={item.image}
                    style={{
                      height: "200px",
                      width: "200px",
                      padding: "0rem",
                      margin: "0rem",
                      borderRadius: "1rem 1rem 0 0"
                    }}
                  />
                </div>
                <div className="wishlist-div">
                  <button
                    className=
                    { 
                      wishItem.find((items)=> items.id===item.id) ?
                      "wishlist-btn wishlist-btn-sel" : "wishlist-btn wishlist-btn-unsel"
                    }
                    onClick={ 
                      (wishItem.find((items)=> items.id===item.id)) ? 
                      (()=>setWishItem((prev)=> prev.filter((items) => item !== items))) : 
                      (()=>setWishItem((items)=> [...items, item]))
                    }
                  >
                    <img src={ wishItem.find((items)=> items.id===item.id) ?"./icons/wishlist-icon-red.svg" :"./icons/wishlist-icon.svg" } alt="heart"></img>
                  </button>
                </div>                
              </div>
              <div className="prod-info">
                <h4 style={{margin: "0rem"}}>{`${item.brand}`}</h4>
                <p className="prod-det">Lorem ipsum dolor sit amet</p>
                <div style={{display: "flex"}}>
                  <div style={{margin:"0 0.2rem"}}>
                    <h4 style={{margin: "0rem"}}>₹{((item.price)-(item.price*(item.offer)/100).toFixed(0))}</h4>
                  </div>
                  <div style={{margin:"0 0.2rem", color:"#575757"}}>
                    <h4 style={{margin: "0rem"}}><s>₹{`${item.price}`}</s></h4>
                  </div>
                  <div style={{margin:"0 0.2rem",color:"hsl(178, 78%, 20%)"}}>
                    <h5 style={{margin: "auto"}}><sub>({`${item.offer}`}% off)</sub></h5>
                  </div>
                </div>
              </div>
              <div className="reducerFunc">
                <button className="reducer-btns"
                  onClick={() => setCartItem((prevState) =>
                    prevState.map((items) =>
                      items.id === item.id
                        ? { ...items, quantity: item.quantity + 1 }
                        : items
                    )
                  )}
                >
                  <img style={{height: "20px"}} src="./icons/plus-circle-solid.svg" alt="plus"></img>
                </button>
                <h5 style={{marginBlockStart: "0px", marginBlockEnd: "0", width: "1rem"}}>{`${item.quantity}`}</h5>
                <button
                  className= "reducer-btns"
                  onClick={() => setCartItem((prevState) =>
                    prevState.map((items) =>
                      items.id === item.id
                        ? { ...items, quantity: item.quantity - 1 }
                        : items
                    )
                  )}
                  disabled = {item.quantity < 2 ? true : false}
                >
                  <img style={{height: "20px"}} src="./icons/minus-circle-solid.svg" alt="trash/minus"></img>
                </button>
              </div>
              <button
                className="remove-cart-button"
                onClick={() =>
                  setCartItem((prev) => prev.filter((items) => item !== items))
                }
              >
                <div className="remove-cart-info">
                <span>Remove Item</span><img style={{height: "15px",margin: "0 0.5rem"}} src="./icons/trash-bin.svg" alt="remove item"></img>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
      }
    </div>
  );
}
