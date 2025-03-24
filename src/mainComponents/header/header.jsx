import "./header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function Header() {
  const qun = useSelector((state) => state.cart.cartItems);

  const totalQun = qun.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <div id="header">
        <div id="main-name">
          <img src="../public/logoHd.svg"></img>

          <div id="name-site">
            <Link id="link-style" to="/">
              Furniro
            </Link>
          </div>
        </div>
        <div id="main-site">
          <Link id="header-link" to="/Home">
            Home
          </Link>
          <Link to="/Shopping" id="header-link">
            Shop
          </Link>
          <Link id="header-link" to="/Blog">
            {" "}
            Blog
          </Link>
          <Link to="/Contact">
            <div id="header-link">Contact</div>
          </Link>
        </div>
        <div id="main-shop">
          <a id="header-link" href="#">
            <PersonOutlineIcon />
          </a>
          <a id="header-link" href="#">
            <SearchIcon />
          </a>
          <a id="header-link" href="#">
            <FavoriteBorderIcon />
          </a>
          <Link className="notf-shop" to="/Cart" id="header-link">
            <span className="numb-shop">{totalQun}</span>
            <AddShoppingCartIcon />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
