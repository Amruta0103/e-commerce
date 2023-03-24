import { useCart } from "../components/cart-context";
import "../components/product-card.css";
import { Link } from "react-router-dom";

export default function Wishlist() {
  const { wishItem, setWishItem, cartItem, setCartItem } = useCart();
  return (
    <div className="Wishlist">
      {wishItem.length < 1 ?
      <div>
        <img style={{height: "300px"}} src="./icons/Error.png" alt="empty"></img>
        <h2>OOPS! Your Favs Bag is Empty</h2>
        <Link className="menu-link" to="/products">
          <button className="home-cta-btn">
            <div className="cta-sub-div">
            <h2 className="cta-text"> Let's Shop!!</h2>
            </div>
          </button>
        </Link>
      </div> 
      :
      <div className="all-products">  
        {wishItem.map((item) => (
          <div key={item._id} className="ProductCardWish">
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
                  <h5 style={{margin: "auto"}}><sub>₹({`${item.offer}`}% off)</sub></h5>
                </div>
              </div>
            </div>
            <Link style={{width: "100%"}} to={cartItem.find((items) => items.id === item.id) ? "/cart" : "/wishlist"}>
              <button
                className = {
                  cartItem.find((items) => items.id === item.id) ?
                  "card-button card-button-sel" :
                  "card-button"
                }
                onClick={cartItem.find((items) => items.id === item.id) ? ()=> !setCartItem : () => setCartItem((items) => [...items, item])}
                >
                {cartItem.find((items) => items.id === item.id) ? "Go to Cart" : "Add to Cart"}
              </button>
            </Link>
          </div>
        ))}
      </div>
      }
    </div>
  );
}
