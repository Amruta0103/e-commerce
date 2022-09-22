// import { data } from "./fakedata";
import ProductDetail from "../components/product-card";
import { useReducer } from "react";
import "./pages.css";
const axios = require('axios');
let data = [];
let dataHai;
export default function ProductList() {
    (async () => {
      try {
        const response = await axios.get('http://localhost:8080/products');
        if(data.length === 0){
          data.push(response.data);
        }else{
          dataHai = data[0].products;
          console.log(dataHai);
        }    
      }
      catch(error){
        console.log("error here",error)
      }
    })();


  const [
    // showInventoryAll, showFastDeliveryOnly,
    { sortBy },
    dispatch
  ] = useReducer(
    function reducer(state, action) {
      switch (action.type) {
        // case "TOGGLE_INVENTORY":
        //   return (state = {
        //     ...state,
        //     showInventoryAll: !state.showInventoryAll
        //   });
        // case "TOGGLE_DELIVERY":
        //   return (state = {
        //     ...state,
        //     showFastDeliveryOnly: !state.showFastDeliveryOnly
        //   });
        case "SORT":
          return {
            ...state,
            sortBy: action.payload
          };
        default:
          return state;
      }
    },
    {
      showInventoryAll: true,
      showFastDeliveryOnly: false,
      sortBy: null
    }
  );
  function getSortedData(data, sortBy) {
    if (sortBy && sortBy === "PRICE_HIGH_TO_LOW") {
      return data.sort((a, b) => b["price"] - a["price"]);
    }

    if (sortBy && sortBy === "PRICE_LOW_TO_HIGH") {
      return data.sort((a, b) => a["price"] - b["price"]);
    }
    console.log("sorted one here", data);
    return data;
  }

  // function getFilteredData(
  //   data,
  //   { showFastDeliveryOnly, showInventoryAll }
  // ) {
  //   return data
  //     .filter(({ fastDelivery }) =>
  //       showFastDeliveryOnly ? fastDelivery : true
  //     )
  //     .filter(({ inStock }) => (showInventoryAll ? data : inStock));
  // }

  const sortedData = getSortedData(data, sortBy);
  // const filteredData = getFilteredData(sortedData, {
  //   showFastDeliveryOnly,
  //   showInventoryAll
  // });
  return (
    <div className="ProductList">
      <div>
      <ul style={{height:"50vh"}}>
        {dataHai[0].map((item) =>{
              return <li key={item.id}>{item.id}</li>
            })}
          </ul>
        <div className="sort">
          <fieldset className="fields">
            <legend className="legend">Sort By</legend>
            <label className="labels">
              <input
                type="radio"
                name="sort"
                onChange={() =>
                  dispatch({ type: "SORT", payload: "PRICE_HIGH_TO_LOW" })
                }
                checked={sortBy && sortBy === "PRICE_HIGH_TO_LOW"}
              ></input>{" "}
              Price - High to Low
            </label>
            <label className="labels">
              <input
                type="radio"
                name="sort"
                onChange={() =>
                  dispatch({ type: "SORT", payload: "PRICE_LOW_TO_HIGH" })
                }
                checked={sortBy && sortBy === "PRICE_LOW_TO_HIGH"}
              ></input>{" "}
              Price - Low to High
            </label>
          </fieldset>
          {/* <fieldset className="fields">
            <legend className="legend"> Filters </legend>
            <label className="labels">
              <input
                name="stock"
                type="checkbox"
                checked={showInventoryAll}
                onChange={() => dispatch({ type: "TOGGLE_INVENTORY" })}
              />
              Include Out of Stock
            </label>
            <label className="labels">
              <input
                name="fast delivery"
                type="checkbox"
                checked={showFastDeliveryOnly}
                onChange={() => dispatch({ type: "TOGGLE_DELIVERY" })}
              />
              Fast Delivery Only
            </label>
          </fieldset>  */}
        </div>
        <div className="prod-pg">
        <h1>Products</h1>
        <div className="all-products">
        </div>
        </div>
      </div>
    </div>
  );
}
