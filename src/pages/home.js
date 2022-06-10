import "../App.css";
import { Link } from "react-router-dom";

export default function Home(){
  return(
    <div className="Home">
      <div>
        {/* <img class="home-images"src="./shopping.png" alt="shopping"></img> */}
        <img class="home-images"src="./icons/e-Commerce.png" alt="shopping"></img>
        <Link className="menu-link" to="/products">
          <button className="home-cta-btn">
            <div className="cta-sub-div">
            <h2 className="cta-text">LET'S GO</h2>
            <img class="arrow" src="./icons/chevron-circle-right-solid.svg" alt="arrow"></img>
            </div>
          </button>
        </Link>
        <h1 className="home-infos">Your One Stop Shop for Your Crafts and Stationery needs!</h1>
      </div>
    </div>
  );
}