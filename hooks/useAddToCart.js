import { useEffect, useContext } from 'react';
import { AppContext } from '../AppContext';

export function useAddToCart() {
  const { setItemName, addedToCart, setAddedToCart, cartItems, setCartItems } =
    useContext(AppContext);

  useEffect(() => {
    if (addedToCart) {
      let timer = setTimeout(() => {
        setAddedToCart(false);
      }, 1800);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [addedToCart]);

  const handleAddToCart = (e) => {
    const value = e.currentTarget.getAttribute('data-value');
    setItemName(value);
    setCartItems((prev) => new Map(prev).set(value, cartItems.get(value) + 1 || 1));
    setAddedToCart(true);
  };

  return { handleAddToCart };
}
