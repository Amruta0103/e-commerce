// // import axios from 'axios';
// // import { useEffect } from 'react';

// // export default function myData({ children }) {
  
// //   useEffect(()=>{
// //     async function fetchData() {
// //       const data = await axios.get('https://the-paper-shop-trial.amrutad.repl.co/products');
// //     } 
// //   })

// //   return(
// //     {children}
// //   );
// // }


// import { createContext, useContext, useReducer } from 'react';
// import { useEffect } from 'react';
// import axios from 'axios';
// import { dataReducer, initialState } from '../../reducer/dataReducer';
// import { useAuth } from '../auth/authContext';

// const DataContext = createContext();

// export function DataProvider({ children }) {
//   const [state, dispatch] = useReducer(dataReducer, initialState);

//   const { token } = useAuth();

//   useEffect(() => {
//     (async function fetchDataFromServer() {
//       try {
//         // const productsResponse = await axios.get('http://localhost:3000/products');
//         const productsResponse = await axios.get('https://shoemeup.pranshudobhal.repl.co/products');
//         dispatch({ type: 'INITIALIZE_PRODUCTS', payload: productsResponse.data.products });

//         if (token) {
//           // const cartResponse = await axios.get('http://localhost:3000/cart');
//           // const wishlistResponse = await axios.get('http://localhost:3000/wishlist');
//           const cartResponse = await axios.get('https://shoemeup.pranshudobhal.repl.co/cart');
//           const wishlistResponse = await axios.get('https://shoemeup.pranshudobhal.repl.co/wishlist');
//           dispatch({ type: 'INITIALIZE_CART', payload: cartResponse.data.cart.products });
//           dispatch({ type: 'INITIALIZE_WISHLIST', payload: wishlistResponse.data.wishlist.products });
//         } else {
//           dispatch({ type: 'RESET_STATE' });
//         }
//       } catch (error) {
//         console.error('Error initializing data from backend!!! ' + error);
//       }
//     })();
//   }, [token]);

//   return (
//     <DataContext.Provider
//       value={{
//         sortBy: state.sortBy,
//         showInventoryAll: state.showInventoryAll,
//         showFastDelivery: state.showFastDelivery,
//         priceSlider: state.priceSlider,
//         cart: state.cart,
//         wishlist: state.wishlist,
//         products: state.products,
//         dataDispatch: dispatch,
//       }}
//     >
//       {children}
//     </DataContext.Provider>
//   );
// }

// export function useData() {
//   return useContext(DataContext);
// }