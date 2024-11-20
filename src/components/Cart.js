import React from 'react';
import './Cart.css';
import { useCart } from '../components/CartContext';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();

  return (
    <div className="cart">
      
      {cart.length === 0 ? (
        <p></p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} width={50} height={50} />
              <div>
                <h4>{item.name}</h4>
                <p>Price: {item.price}</p>
                <div>
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span> Quantity: {item.quantity} </span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <p>Total: ₹{parseFloat(item.price.replace('₹', '')) * item.quantity}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Cart;
