import { createContext, useState } from 'react';

export const AppContext = createContext();

export function AppContextWrapper({ children }) {
  const [cartItems, setCartItems] = useState(new Map());
  const [itemName, setItemName] = useState('');
  const [addedToCart, setAddedToCart] = useState(false);

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
