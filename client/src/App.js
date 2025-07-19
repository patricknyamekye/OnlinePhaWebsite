
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import ContactPage from './pages/ContactPage';
import ProductPage from './pages/ProductPage';
import AboutPage from './pages/AboutPage';
import SignUpPage from './pages/SignUpPage';
import  LoginPage from './pages/LoginPage';
import TrendingProductDetailPage from './pages/TrendingProductDetailPage';

import LatestNewDetailsPage from './pages/LatestNewDetailsPage ';
import AllNewsPages from './pages/AllNewsPage';
import CartPage from './pages/CartPage'; 
import CheckoutComponentPage from './pages/CheckoutComponentPage'; 

function App() {
  return (
  <>
    <Router>
      <Routes>
        <Route exact path="/" element={ <HomePage /> } />
        <Route exact path="/contact-us" element={ < ContactPage/> } />
        <Route exact path="/login" element={ <  LoginPage/> } />
        <Route exact path="/product" element={ <  ProductPage/> } />
        <Route exact path="/SignUp" element={ <  SignUpPage/> } />
        <Route exact path="/about" element={ < AboutPage /> } /> 
         <Route  exact path="/product/:id" element={<TrendingProductDetailPage />} />
         <Route exact path="/allnews" element={<AllNewsPages />} />
         < Route exact path="/newsDetails/:id" element={<LatestNewDetailsPage />} />
         <Route exact path="/cards" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutComponentPage />} /> 


        
      </Routes>
    </Router>
    </>
    
    
    
  
  );
}

export default App;
