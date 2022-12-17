import { useContext } from 'react';
import { AppContext } from '../../AppContext';
import { useAddToCart } from '../../hooks/useAddToCart';

export default function AddToCartBtn({ children, btnClass, name, price }) {
  const { addedToCart } = useContext(AppContext);
  const { handleAddToCart } = useAddToCart();

  return (
    <button
      className={btnClass}
      onClick={handleAddToCart}
      data-name={name}
      data-price={price}
      aria-label={`Add ${name} to the cart.`}
      disabled={addedToCart ? true : false}
    >
      {children}
    </button>
  );
}
