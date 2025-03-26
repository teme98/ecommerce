import "./home.css";
import Browse from "./browse/browse";
import Products from "./products/products";
import SlideBody from "./sildebody/slideBody";
import Grid from "./grid/grid";

function Home() {
  return (
    <>
      <img id="mask" src="https://raw.githubusercontent.com/teme98/ecommerce/refs/heads/main/public/MaskHome1.png"></img>
      <Browse />
      <Products />
      <SlideBody />
      <Grid />
    </>
  );
}

export default Home;
