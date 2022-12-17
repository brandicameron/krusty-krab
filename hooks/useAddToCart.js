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
    const currentItemName = e.currentTarget.getAttribute('data-name');
    const currentItemPrice = e.currentTarget.getAttribute('data-price');
    setItemName(currentItemName);

    if (cartItems.has(currentItemName)) {
      setCartItems((prev) =>
        new Map(prev).set(currentItemName, {
          quantity: cartItems.get(currentItemName).quantity + 1,
          price: currentItemPrice,
        })
      );
    } else {
      setCartItems((prev) =>
        new Map(prev).set(currentItemName, {
          quantity: 1,
          price: currentItemPrice,
        })
      );
    }

    setAddedToCart(true);
  };

  return { handleAddToCart };
}
