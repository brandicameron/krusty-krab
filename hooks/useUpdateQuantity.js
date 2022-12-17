import { useContext } from 'react';
import { AppContext } from '../AppContext';

export function useUpdateQuantity() {
  const { cartItems, setCartItems } = useContext(AppContext);

  const handleUpdateQuantity = (e) => {
    const name = e.currentTarget.getAttribute('data-name');
    let currentQuantity = cartItems.get(name).quantity;

    if (e.target.textContent === '-' && cartItems.get(name).quantity > 0) {
      setCartItems((prev) =>
        new Map(prev).set(name, {
          quantity: cartItems.get(name).quantity - 1,
          price: cartItems.get(name).price,
        })
      );
      currentQuantity = currentQuantity - 1;
    } else if (e.target.textContent === '+') {
      setCartItems((prev) =>
        new Map(prev).set(name, {
          quantity: cartItems.get(name).quantity + 1,
          price: cartItems.get(name).price,
        })
      );
      currentQuantity = currentQuantity + 1;
    }

    // Delete item if quantity updates to zero
    if (currentQuantity === 0) {
      setCartItems((prev) => {
        const newState = new Map(prev);
        newState.delete(name);
        return newState;
      });
    }
  };

  return { handleUpdateQuantity };
}
