import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import Mac from "./pages/mac";
import Iphone from "./pages/iphone";
import Jbl from "./pages/jbl";
import Watch from "./pages/watch";
import Ipad from "./pages/ipad";
import Airpods from "./pages/airpods";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/iphone" element={<Iphone />} />
        <Route path="/mac" element={<Mac />} />
        <Route path="/jbl" element={<Jbl />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/ipad" element={<Ipad />} />
        <Route path="/airpods" element={<Airpods />} />
      </Routes>

      <ToastContainer position="top-center" theme="colored" autoClose={2000} />
    </Router>
  );
}

export default App;



