import React, { useState, createContext, useEffect } from 'react';
import productos from '../util/productos';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  
  
  const addToCart = (product,cant) => {
    const indexProduct = cart.findIndex((cartItem) => cartItem.id === product.id);
    if (indexProduct !== -1) {
      const newCart = [...cart];
      newCart[indexProduct].count = cart[indexProduct].count + cant;
      setCart(newCart);
    } else {
      product.count = cant;
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((p) => p.id !== id));
  };

  const buyAll = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, buyAll }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;