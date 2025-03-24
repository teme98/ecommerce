import { Link } from "react-router-dom";
import PoductShop from "./products/PoductShop";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function ShoppingCart() {
  return (
    <div>
      <div id="backgrond-contact">
        <div id="contact-icon">
          <img src="../public/logoHd.svg" />
        </div>
        <h2>SHOP</h2>
        <div id="cont-contact">
          <Link id="link-line" to="/">
            <div id="contact-link">Home</div>
          </Link>
          <span>
            <ArrowForwardIosIcon />
          </span>
          <p style={{ color: "black" }}>Shop</p>
        </div>
      </div>

      <div>
        <PoductShop />
      </div>
    </div>
  );
}

export default ShoppingCart;
