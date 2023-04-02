import "../pages/pages.css";
import { Link } from 'react-router-dom';
import { useCart } from "./cart-context";
const Navbar = () => {
  const { cartItem, wishItem } = useCart();
  return(
    <nav className="navbar">
    <div className="brand">
      <img className="brand-icon" src="./icons/origami.png" alt="brand-icon" />
      <h1>The Paper Shop</h1>
    </div>
    <div className="navmenus">
      <Link className="menu-link" to="/"><button className="menu-btn">
        <img className="nav-icons" src="./icons/home-solid.svg" alt="HOME"></img>
      </button></Link>
      <Link className="menu-link" to="/products"><button className="menu-btn"><img className="nav-icons" src="./icons/store-solid.svg" alt="Products"></img></button></Link>
      <Link className="menu-link" to="/cart"><button className="menu-btn"><img className="nav-icons" src="./icons/shopping-cart-solid.svg" alt="Cart"></img>{cartItem.length < 1 ? null : cartItem.length}</button></Link>
      <Link className="menu-link" to="/wishlist"><button className="menu-btn"><img className="nav-icons" src="./icons/bookmark-solid.svg" alt="Wishlist"></img>{wishItem.length < 1 ? null : wishItem.length}</button></Link>
      {/* <Link className="menu-link" to="/login"><button className="menu-btn"><img className="nav-icons" src="./icons/user-circle-solid.svg" alt="Login"></img></button></Link> */}
      {/* <Link className="menu-link" to="/checkout"><button className="menu-btn">CheckOut</button></Link> */}
    </div>
  </nav>
  );
}

export default Navbar;