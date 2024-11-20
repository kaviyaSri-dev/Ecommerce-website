// src/components/ProductCard.js
import React from 'react';
import './ProductCard.css';
import { Link,useLocation } from 'react-router-dom';
import { useCart } from '../components/CartContext';


const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
    const location = useLocation();
  
  return (
    <div className="product-cards">
      
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <Link to={`/product/${product.id}`} className="view-details">
            View Details
          </Link>
      {location.pathname !== '/' && (
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      )}
       </div>
    
  );
};

export default ProductCard;
