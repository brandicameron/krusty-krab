import { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export function AppContextWrapper({ children }) {
  const [cartItems, setCartItems] = useState(new Map());
  const [itemName, setItemName] = useState('');
  const [addedToCart, setAddedToCart] = useState(false);

  // console.log(cartItems);

  return (
    <AppContext.Provider
      value={{
        cartItems,
        setCartItems,
        itemName,
        setItemName,
        addedToCart,
        setAddedToCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
