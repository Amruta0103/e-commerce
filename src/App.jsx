import React from "react";
import './App.css';
import {Route, Routes} from "react-router-dom";
import { PrivateRoute } from "./components/privateRoute.js";
import Home from "./pages/home";
import Cart from "./pages/cart.js";
import Wishlist from "./pages/wishlist.js";
import ProductListing from "./pages/product-listing.js";
import Login from "./pages/login";
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