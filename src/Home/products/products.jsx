import "./products.css";
import Product from "./product/product";
import { useState } from "react";

function Products() {
  const [currentProducts, setMoreProducts] = useState("flex");

  return (
    <>
      <div id="products-cont">
        <h3>Our Products</h3>
        <div style={{ display: currentProducts }} id="prod">
          <Product />
        </div>
        <button
          onClick={() => {
            console.log("hello");
            setMoreProducts((prev) => (prev === "flex" ? "none" : "flex"));
          }}
          id="btn-products"
        >
          {currentProducts === "none" ? "Show Products" : "Hide Products"}
        </button>
      </div>
    </>
  );
}

export default Products;
