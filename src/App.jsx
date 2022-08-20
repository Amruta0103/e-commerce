import React from "react";
import './App.css';
import {Route, Routes} from "react-router-dom";
import { PrivateRoute } from "./components/privateRoute.js";
import Home from "./app/components/pages/home";
import Cart from "./app/components/pages/cart.js";
import Wishlist from "./app/components/pages/wishlist.js";
import ProductListing from "./app/components/pages/product-listing.js";
import Login from "./app/components/pages/login";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing/>} />
        <Route path="/login" element={<Login/>} />
        <Route path ="/wishlist" element={<Wishlist/>} />
        <PrivateRoute path="/cart" element={<Cart />} />
      </Routes>     
    </div>       
  );
}

export default App;