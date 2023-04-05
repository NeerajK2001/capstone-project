import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./scenes/home/Home";
import Navbar from "./scenes/global/Navbar";
import CartMenu from "./scenes/global/CartMenu";
import Checkout from "./scenes/checkout/Checkout";
import Confirmation from "./scenes/checkout/Confirmation";
import Shop from "./scenes/shop/Shop"
import About from "./scenes/home/About"
import Contact from "./scenes/home/Contact";
import Events from "./scenes/event/Events";
import AuthMenu from "./scenes/global/AuthMenu";
import Gallery from "./scenes/home/gallery";
import Footer from "./scenes/global/Footer";
import EventDetails from "./scenes/event/EventDetails"
// import Registration from "./scenes/authentication/register";
import ReviewsList from "./scenes/shop/ReviewsList";
import Login from "./scenes/authentication/login";
import Logout from "./scenes/authentication/logout";
import Product from "./scenes/shop/ProductPage";
import Signup from "./scenes/authentication/Signup";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="checkout/success" element={<Confirmation />} />
          <Route path="shop" element={<Shop />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Events" element={<Events />} />
          <Route path="ReviewsList" element={<ReviewsList />} />
          <Route path="event/:eventId" element={<EventDetails />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="login" element={<Login />} />
          <Route path="logout" element={<Logout />} />
          <Route path="productpage" element={<Product />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
        <ToastContainer />
        <AuthMenu/>
        <CartMenu />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
