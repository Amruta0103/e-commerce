import { useCart } from "../components/cart-context";
import { Link } from "react-router-dom";


const Checkout = () => {
  const {cartItem} = useCart()
  function reducer(sum,cartItem){
    return sum+cartItem.price* cartItem.quantity;
  }
  return (
    <>
      <h2 style={{margin: "10rem auto auto"}}>Please Check Your Final order</h2>
      <table className="checkOutTable">
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
        {cartItem.map((item) => (
          <tr className="checkOutTr" key={item.id}>
            <td className="checkOutTr">{item.title}</td>
            <td className="checkOutTr">{item.price}</td>
            <td className="checkOutTr">{item.quantity}</td>
          </tr>
        ))}
      </table>
      <h3 style={{marginBlockStart: "0em",marginBlockEnd: "0em", }}>Have any changes? &nbsp;
      <Link style={{margin: "0.5rem auto",textDecoration: "none"}} to="/cart">Click Here</Link>
      </h3>

      <h1>Total Price: ₹{cartItem.reduce(reducer,0)}</h1>

      <div>
        <h1>Place Order</h1>
      </div>
    </>
  ) 
}

export default Checkout;