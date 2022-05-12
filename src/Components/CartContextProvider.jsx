import React, { useState, createContext} from 'react';


export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  
  //Agregar producto al carrito, si el producto ya esta en el carrito, sumar la cantidad.
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

  //Eliminar producto del carrito.
  const removeFromCart = (id) => {
    setCart(cart.filter((p) => p.id !== id));
  };

  //Vacía el carrito.
  const buyAll = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, buyAll }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;