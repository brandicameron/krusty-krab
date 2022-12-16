import { useContext } from 'react';
import { AppContext } from '../../AppContext';
import { useAddToCart } from '../../hooks/useAddToCart';

export default function AddToCartBtn({ children, btnClass, data }) {
  const { addedToCart, cartItems, setCartItems } = useContext(AppContext);
  const { handleAddToCart } = useAddToCart(cartItems, setCartItems);

  return (
    <button
      className={btnClass}
      onClick={handleAddToCart}
      data-value={data}
      aria-label={`Add ${data} to the cart.`}
      disabled={addedToCart ? true : false}
    >
      {children}
    </button>
  );
}
