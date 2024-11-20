import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import { CartProvider } from './components/CartContext';
import Banner from './components/Banner';
import ProductCard from './components/ProductCard';
import ProductDetail from './components/ProductDetail';
import products from './data/products';
import ProductSection from './components/ProductSection';
import RelatedProductsPage from './components/RelatedProductsPage'; // New component
import Footer from './components/Footer';
import Cart from './components/Cart';
import './App.css';
const App = () => {
  const location = useLocation();
  return (
    <div className="App">
      <Header />
      {location.pathname === '/' && <Banner />}
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>My Smart Basket</h1>
              <div className="product-list">
                {products.slice(0, 8).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          }
        />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/category/:categorytitle" element={<RelatedProductsPage />} />
      </Routes>
      {location.pathname === '/' && <ProductSection />}
      <Cart />
      <Footer/>
    </div>
  );
};
const RootApp = () => (
  <Router>
    <CartProvider>
    <App />
    </CartProvider>
  </Router>
);
export default RootApp;
