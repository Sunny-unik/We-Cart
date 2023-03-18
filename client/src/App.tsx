import { BrowserRouter, Routes, Route } from "react-router-dom";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import Collection from "./pages/Collection";
import Home from "./pages/Home";
import Product from "./pages/Product";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/product/:handle" element={<Product />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;