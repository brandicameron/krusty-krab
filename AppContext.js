import { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export function AppContextWrapper({ children }) {
  const [numItemsInCart, setNumItemsInCart] = useState(0);
  const [cartItems, setCartItems] = useState(new Map());
  const [itemName, setItemName] = useState('');

  useEffect(() => {
    let sum = 0;
    cartItems.forEach((value) => {
      sum += value;
    });
    setNumItemsInCart(sum);
  }, [cartItems]);

  return (
    <AppContext.Provider
      value={{ numItemsInCart, setNumItemsInCart, cartItems, setCartItems, itemName, setItemName }}
    >
      {children}
    </AppContext.Provider>
  );
}
