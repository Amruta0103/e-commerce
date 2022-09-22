import { useCart } from "../components/cart-context";
import '../components/product-card.css';
import { Link } from "react-router-dom";

export default function ProductDetail({ item }) {
  const { cartItem, setCartItem, wishItem, setWishItem } = useCart();
  return (
    <div className="ProductCard">
      <div className="img-wish">
        <div className="prod-img">
          <img
            alt="temporary pics"
            style={{
              height: "200px",
              width: "200px",
              padding: "0rem",
              margin: "0rem",
              borderRadius: "1rem 1rem 0 0"
            }}
            src={item.image}
          />
        </div>
        <div className="wishlist-div">
          <button
            className=
            { wishItem.find((items)=> items.id===item.id) ?"wishlist-btn wishlist-btn-sel" : "wishlist-btn wishlist-btn-unsel"
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
        <h4 style={{margin: "0 0.1rem"}}>{`${item.title}`}</h4>
        <p className="prod-det">{`${item.description}`}</p>
        <div style={{display: "flex"}}>
          <div style={{margin:"0 0.3rem 0 0"}}>
            <h4 style={{margin: "0rem"}}>₹{((item.price)-(item.price*(item.offer)/100).toFixed(0))}</h4>
          </div>
          <div style={{margin:"0 0.3rem", color:"#575757"}}>
            <h4 style={{margin: "0rem"}}><s>₹{`${item.price}`}</s></h4>
          </div>
          <div style={{margin:"0 0.3rem",color:"hsl(178, 78%, 20%)"}}>
            {/* <h5 style={{margin: "auto"}}><sub>({`${item.offer}`}% off)</sub></h5> */}
          </div>
        </div>
      </div>
      <Link style={{width: "100%"}} to={cartItem.find((items) => items.id === item.id) ? "/cart" :"/products"}>
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
  );
}

