import "./product.css";
import { images } from "../../../data/ProductsData";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../redux/cartSlice";
import { removeFromCart } from "../../../redux/cartSlice";

import { useNotifications } from "@toolpad/core/useNotifications";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

function Product() {
  const dispatch = useDispatch();
  const notifications = useNotifications();
  const handleClickAddCart = (product) => {
    dispatch(addToCart(product));

    notifications.show(`${product.title} added to cart!`, {
      severity: "success",
      autoHideDuration: 3000,
    });
  };
  const cartItems = useSelector((state) => state.cart.cartItems);
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
    notifications.show(`${product.title} removed from cart`, {
      severity: "info",
      autoHideDuration: 3000,
    });
  };

  return (
    <>
      {images.map((e) => {
        const itemInCart = cartItems.find((item) => item.id === e.id);
        const quantity = itemInCart ? itemInCart.quantity : 0;

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
      })}
    </>
  );
}

export default Product;
