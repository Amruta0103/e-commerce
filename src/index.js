import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App.jsx';
import { CartProvider } from "../src/app/components/cart-context";
import { AuthProvider } from "../src/app/context/authContext";
import { UserProvider } from "../src/app/context/userContext"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <UserProvider>
          <CartProvider>
            <App/>
          </CartProvider>
        </UserProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
