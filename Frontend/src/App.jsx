import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./NavBar";
import Products from "./pages/Products";
import Male from "./pages/Male";
import Female from "./pages/Female";
import Kids from "./pages/Kids";
// import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import Cart from "./pages/Cart";
import ProductsInfo from "./pages/ProductsInfo";
import { datas } from "./Api";
import { useState } from "react";
import Footer from "./Footer";

function App() {
  const [cart, setCart] = useState([]);

  function changeQuantity(itemId, newQuantity) {
    setCart((prevCart) =>
      prevCart.map((item) =>
        +item.id === +itemId.id ? { ...item, quantity: +newQuantity } : item
      )
    );
  }

  function addToCart(data) {
    setCart([...cart, { ...data, quantity: 1 }]);

    let dupliItems = cart.find((items) => items.id === data.id);
    if (dupliItems) {
      let updatedCart = cart.map((item) =>
        +item.id === +data.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    }
  }

  function updateCartNumber() {
    let counter = 0;
    cart.forEach((item) => {
      counter += item.quantity;
    });
    return counter;
  }

  function removeItem(item) {
    setCart(cart.filter((items) => items.id !== item.id));
  }

  return (
    <>
      <Router>
        <NavBar updateCartNumber={updateCartNumber()} />
        <Routes>
          {/* <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Products />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/male" element={<Male />} />
          <Route path="/female" element={<Female />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/Payment" element={<Payment />} />

          <Route
            exact
            path="/cart"
            element={
              <Cart
                cart={cart}
                changeQuantity={changeQuantity}
                removeItem={removeItem}
              />
            }
          />
          <Route
            exact
            path="/productsInfo/:id"
            element={
              <ProductsInfo datas={datas} addToCart={addToCart} cart={cart} />
            }
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
