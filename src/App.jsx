import React from "react";
import './App.css';
import {Route, Routes} from "react-router-dom";
import { PrivateRoute } from "../src/app/components/privateRoute";
import Home from "../src/app/pages/home";
import Cart from "../src/app/pages/cart";
import Wishlist from "../src/app/pages/wishlist";
import ProductListing from "../src/app/pages/product-listing";
import Login from "../src/app/pages/login";
import Navbar from "../src/app/components/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing/>} />
        <Route path="/login" element={<Login/>} />
        <Route path ="/wishlist" element={<Wishlist/>} />
        <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
      </Routes>     
    </div>       
  );
}

export default App;