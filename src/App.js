import { Route, Routes, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import About from "./components/About";
import "./App.css"
import ProductPage from "./components/ProductPage";
import { useEffect, useState } from "react";
import Cart from "./components/Cart";

function App() {

  const savePhoneGet = JSON.parse(localStorage.getItem("cart")) || []
  const [cart, setCart] = useState(savePhoneGet);





  const addToCart = (phone) => {
    alert(phone.brand);
    setCart([...cart, phone]);
    console.log(cart);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))


  }, [cart]);
  return (
    <div className="App">
      <header>
        <div className=""></div>
        <div className="logo"></div>
        <div className="navigation">
          <a href="/">Home</a>
          <a href="/aboudsrftgdhsfguyhrtdsusryhrshysdthgesserergrert">About</a>
          <a>Contacts</a>
        </div>
        <div className="btns_header"></div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<ProductList addToCart={addToCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<Cart cartItems={savePhoneGet} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
