import ViewDayOutlinedIcon from "@mui/icons-material/ViewDayOutlined";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import TextField from "@mui/material/TextField";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import "./ProductShop.css";

import { useState } from "react";
import { images } from "../../data/ProductsData";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/cartSlice";
import { useNotifications } from "@toolpad/core/useNotifications";

function ProductShop() {
  const dispatch = useDispatch();
  const notifications = useNotifications();
  const [currentView, setNewView] = useState("Hello");
  const [search, setSearch] = useState("");
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleClickAddCart = (product) => {
    dispatch(addToCart(product));
    notifications.show(`${product.title} added to cart!`, {
      severity: "success",
      autoHideDuration: 3000,
    });
  };

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
    notifications.show(`${product.title} removed from cart`, {
      severity: "info",
      autoHideDuration: 3000,
    });
  };

  const filteredImages = images.filter((e) =>
    search.trim() === ""
      ? true
      : e.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* Header */}
      <div className="header-shop">
        <div className="view-shop">
          <p className="filter-shop" style={{ color: "black" }}>
            <TuneRoundedIcon />
            <span>Filter</span>
          </p>
          <button onClick={() => setNewView("Hello")} className="btn-view-shop">
            <GridViewRoundedIcon />
          </button>
          <button onClick={() => setNewView("Hi")} className="btn-view-shop">
            <ViewDayOutlinedIcon />
          </button>
        </div>
        <div className="search-shop">
          <TextField
            id="filled-basic"
            label="Search"
            variant="filled"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Product Display */}
      <div className="product-cont-shop">
        {filteredImages.map((e) => {
          const itemInCart = cartItems.find((item) => item.id === e.id);
          const quantity = itemInCart ? itemInCart.quantity : 0;

          if (currentView === "Hello") {
            return (
              <div key={e.id} id="product-cont">
                <img id="product-img" src={e.src} alt={e.title} />
                <h5>{e.title}</h5>
                <p>{e.dis}</p>
                <h5>{e.price}</h5>
                {quantity === 0 ? (
                  <button
                    className="btn-card-card"
                    onClick={() => handleClickAddCart(e)}
                  >
                    Add To Cart
                  </button>
                ) : (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      backgroundColor: "#cfb577",
                    }}
                  >
                    <button
                      style={{ backgroundColor: "#cfb577", border: "none" }}
                      onClick={() => handleClickAddCart(e)}
                    >
                      <AddIcon className="ad-prod" />
                    </button>
                    <span className="qun">{quantity}</span>
                    <button
                      style={{ backgroundColor: "#cfb577", border: "none" }}
                      onClick={() => handleRemoveFromCart(e)}
                    >
                      <DeleteIcon className="del-prod" />
                    </button>
                  </div>
                )}
              </div>
            );
          } else {
            return (
              <div key={e.id} id="product-cont-row">
                <img id="product-img-row" src={e.src} alt={e.title} />
                <div>
                  <h5>{e.title}</h5>
                  <p>{e.dis}</p>
                  <h5>{e.price}</h5>
                  {quantity === 0 ? (
                    <button
                      className="btn-card-card"
                      onClick={() => handleClickAddCart(e)}
                    >
                      Add To Cart
                    </button>
                  ) : (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        backgroundColor: "#cfb577",
                        padding: "5px",
                        borderRadius: "5px",
                        alignItems: "center",
                        width: "fit-content",
                      }}
                    >
                      <button
                        style={{ backgroundColor: "#cfb577", border: "none" }}
                        onClick={() => handleClickAddCart(e)}
                      >
                        <AddIcon className="ad-prod" />
                      </button>
                      <span className="qun">{quantity}</span>
                      <button
                        style={{ backgroundColor: "#cfb577", border: "none" }}
                        onClick={() => handleRemoveFromCart(e)}
                      >
                        <DeleteIcon className="del-prod" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default ProductShop;
