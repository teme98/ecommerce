import "./Cart.css";
import GoldLine from "../mainComponents/goldLine/goldLine";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DeleteIcon from "@mui/icons-material/Delete";

function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <div className="for-phone">
      <div id="backgrond-contact">
        <div id="contact-icon">
          <img src="../public/logoHd.svg" />
        </div>
        <h2>CART</h2>
        <div id="cont-contact">
          <Link id="link-line" to="/">
            <div id="contact-link">Home</div>
          </Link>
          <span>
            <ArrowForwardIosIcon />
          </span>
          <p style={{ color: "black" }}>Cart</p>
        </div>
      </div>
      <div className="cont-cart">
        {cartItems.length === 0 ? (
          <h1 className="emp-check">Your cart is empty</h1>
        ) : (
          <div className="cont-all-cart">
            <table className="table-cart">
              <thead id="backg-head-table">
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              {cartItems.map((item) => (
                <tbody key={item.id} id="backg-body-table">
                  <tr>
                    <td className="image-title-cart">
                      <img
                        className="image-cart"
                        src={item.src}
                        alt={item.title}
                      />
                      {item.title}
                    </td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price * item.quantity} </td>
                    <td>
                      <button
                        onClick={() => {
                          dispatch(removeFromCart(item));
                        }}
                        className="btn-delete-cart"
                      >
                        <DeleteIcon />
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
            <div className="total-prise-div">
              <h3>Cart Totals</h3>
              <div className="center-checkout-cart">
                <p style={{ color: "black" }}>Subtotal</p>
                <p>{totalPrice}</p>
              </div>
              <div className="center-checkout-cart">
                <p style={{ color: "black" }}>Total</p>
                <p style={{ color: "#B88E2F", fontSize: "20px" }}>
                  {totalPrice}
                </p>
              </div>
              <Link to="/CheckOut">
                <button id="btn-check-cart">Check Out</button>
              </Link>
            </div>
          </div>
        )}
      </div>
      {/* FOR PHONE 375PX  */}
      <div className="cont-cart-phone">
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div className="cont-all-cart-phone">
            <div className="on-cart-phone">
              {cartItems.map((item) => {
                return (
                  <div className="div-cart-phone" key={item.id}>
                    <img className="img-cart-phone" src={item.src} />
                    <div>{item.title} </div>
                    <div className="qun-cart-phone">
                      Quantity : {item.quantity}{" "}
                      <button
                        onClick={() => {
                          dispatch(removeFromCart(item));
                        }}
                        className="btn-delete-cart"
                      >
                        <DeleteIcon />
                      </button>{" "}
                    </div>
                    <div className="price-cart-phone">
                      {item.quantity} X {item.price}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="total-prise-div">
              <h3>Cart Totals</h3>
              <div className="center-checkout-cart">
                <p style={{ color: "black" }}>Subtotal</p>
                <p>{totalPrice}</p>
              </div>
              <div className="center-checkout-cart">
                <p style={{ color: "black" }}>Total</p>
                <p style={{ color: "#B88E2F", fontSize: "20px" }}>
                  {totalPrice}
                </p>
              </div>
              <Link to="/CheckOut">
                <button id="btn-check-cart">Check Out</button>
              </Link>
            </div>
          </div>
        )}
      </div>

      <GoldLine />
    </div>
  );
}

export default Cart;
