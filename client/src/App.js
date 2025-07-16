
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import ContactPage from './pages/ContactPage';
import ServicesPages from './pages/ServicesPages';
import ProductPage from './pages/ProductPage';
import LoginPage from './pages/LoginPage';
import AboutPage from './pages/AboutPage';


function App() {
  return (
  <>
    <Router>
      <Routes>
        <Route exact path="/" element={ <HomePage /> } />
        <Route exact path="/contact-us" element={ < ContactPage/> } />
        <Route exact path="/services" element={ <  ServicesPages/> } />
        <Route exact path="/product" element={ <  ProductPage/> } />
        <Route exact path="/login" element={ <  LoginPage/> } />
        <Route exact path="/about" element={ < AboutPage /> } />
        
      </Routes>
    </Router>
    </>
    
    
    
  
  );
}

export default App;
