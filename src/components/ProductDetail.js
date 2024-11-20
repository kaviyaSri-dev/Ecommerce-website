import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';
import productsData from '../data/products';
import { useCart } from '../components/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = productsData.find(item => item.id === parseInt(id));

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      
      <label>Pack Sizes</label>
      <select>
        {product.packSizes.map((size, index) => (
          <option key={index}>{size}</option>
        ))}
      </select>

      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <button>Save</button>
    </div>
  );
};

export default ProductDetail;
