import "./App.css";
import Contact from "./contact/contact";
import Home from "./Home/home";
import { Route, Routes } from "react-router-dom";
import Header from "./mainComponents/header/header";
import Footer from "./mainComponents/footer/footer";
import Blog from "./Blog/blog";
import SingleBlog from "./Blog/singelPgaeBlog/singelBlog";
import Cart from "./Cart/cart";
import CheckOut from "./CheckOut/CheckOut";
import ShoppingCart from "./ShoppingCart/ShoppingCart";

function App() {
  return (
    <>
      <div className="style-phone">
        <Header />
      </div>
      <div className="app-div" style={{ marginTop: "6%" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/SingleBlog/:id" element={<SingleBlog />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="/CheckOut" element={<CheckOut />} />
          <Route path="/Shopping" element={<ShoppingCart />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
