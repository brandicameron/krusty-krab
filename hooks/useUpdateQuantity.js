import { useContext } from 'react';
import { AppContext } from '../AppContext';
import { menuItems } from '../data/menuItems';

export function useUpdateQuantity() {
  const { cartItems, setCartItems } = useContext(AppContext);

  const shoppingCart = Array.from(cartItems, ([key, value]) => {
    let itemPrice = menuItems.find((el) => el.name === key);
    return { name: key, quantity: value, price: parseFloat(itemPrice.price) * value };
  });

  const total = shoppingCart.reduce((total, obj) => parseFloat(obj.price) + total, 0);

  const handleUpdateQuantity = (e) => {
    const name = e.currentTarget.getAttribute('data-name');
    let currentQuantity = cartItems.get(name);

    if (e.target.textContent === '-' && cartItems.get(name) > 0) {
      setCartItems((prev) => new Map(prev).set(name, cartItems.get(name) - 1));
      currentQuantity = currentQuantity - 1;
    } else if (e.target.textContent === '+') {
      setCartItems((prev) => new Map(prev).set(name, cartItems.get(name) + 1));
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

  return { handleUpdateQuantity, total, shoppingCart };
}
