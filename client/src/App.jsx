import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import ProductPage from './components/ProductPage/ProductPage';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import CartPage from './components/CartPage/CartPage';
import CheckoutPage from './components/CheckoutPage/CheckoutPage';
import OrderTracking from './components/OrderTracking/OrderTracking';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import AllProducts from './components/AllProducts/AllProducts';
import ProductDetails from './components/ProductDetails/ProductDetails';
import UserProfile from './components/UserProfile/UserProfile';
import Contacts from './components/Contacts/Contacts';
import AboutUs from './components/AboutUs/AboutUs';
import NotFound from './components/NotFound/NotFound';
import Layout from './components/Layout/Layout';
import './index.css';
import WhatsAppFloat from './WhatsAppFloat';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout/:userId" element={<CheckoutPage />} />
          <Route path="/tracking/:userId" element={<OrderTracking />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/product/:prodId" element={<ProductDetails />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppFloat />
      </Layout>
    </Router>
  );
}

export default App;