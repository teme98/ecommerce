import "./CheckOut.css";
import GoldLine from "../mainComponents/goldLine/goldLine";
import Billing from "./BillingDetails/Billing";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function CheckOut() {
  const [selectedMethod, setSelectedMethod] = useState("bank");
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const cart = cartItems.map((item) => {
    return (
      <div key={item.id} className="plac-space">
        <p>
          {item.quantity} x {item.title}
        </p>
        <p>{item.price}</p>
      </div>
    );
  });

  return (
    <div>
      <div id="backgrond-contact">
        <div id="contact-icon">
          <img src="../public/logoHd.svg" />
        </div>
        <h2>CHECKOUT</h2>
        <div id="cont-contact">
          <Link id="link-line" to="/">
            <div id="contact-link">Home</div>
          </Link>
          <span>
            <ArrowForwardIosIcon />
          </span>
          <p style={{ color: "black" }}>Checkout</p>
        </div>
      </div>
      {cartItems.length === 0 ? (
        <h1 className="emp-check">Your cart is empty</h1>
      ) : (
        <div className="cont-check">
          <div className="div-bill">
            <Billing />
          </div>
          <div className="div-placeorder">
            <div className="plac-space">
              <h4>Product</h4>
              <h4>Subtotal</h4>
            </div>
            {cart}
            <div className="plac-space">
              <p>Subtotal</p>
              <p>{totalPrice}</p>
            </div>
            <div className="plac-space">
              <p>Total</p>
              <h4>{totalPrice}</h4>
            </div>

            <hr />
            <div>
              <label
                className={`payment-option ${selectedMethod === "bank" ? "selected" : ""}`}
              >
                <input
                  type="radio"
                  name="payment"
                  value="bank"
                  checked={selectedMethod === "bank"}
                  onChange={() => setSelectedMethod("bank")}
                />
                <b>Direct Bank Transfer</b>
              </label>
              {selectedMethod === "bank" && (
                <p className="description">
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference. Your order will not be
                  shipped until the funds have cleared in our account.
                </p>
              )}
              <label
                className={`payment-option ${selectedMethod === "direct" ? "selected" : ""}`}
              >
                <input
                  type="radio"
                  name="payment"
                  value="direct"
                  checked={selectedMethod === "direct"}
                  onChange={() => setSelectedMethod("direct")}
                />

                <b>Direct Bank Transfer</b>
              </label>
              {/* Payment Option 2: Cash On Delivery */}
              <label
                className={`payment-option ${selectedMethod === "cod" ? "selected" : ""}`}
              >
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={selectedMethod === "cod"}
                  onChange={() => setSelectedMethod("cod")}
                />
                <b>Cash On Delivery</b>
              </label>

              {/* Terms */}
              <p style={{ fontSize: "14px", color: "#333" }}>
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our
                <b> privacy policy</b>.
              </p>
            </div>
            <button className="btn-order">Place order</button>
          </div>
        </div>
      )}
      <GoldLine />
    </div>
  );
}

export default CheckOut;
