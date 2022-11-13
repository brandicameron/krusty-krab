import styles from '../../styles/index/MenuItem.module.css';
import { useContext } from 'react';
import { AppContext } from '../../AppContext';
import { useAddToCart } from '../../hooks/useAddToCart';

export default function MenuItem({ item }) {
  const { cartItems, setCartItems } = useContext(AppContext);
  const { handleAddToCart } = useAddToCart(cartItems, setCartItems);

  return (
    <li className={styles.menuItem}>
      <button
        name={`Add ${item.name} to cart`}
        data-value={item.name}
        onClick={handleAddToCart}
        title={`Add ${item.name} to cart.`}
      >
        <span>{item.name}</span>
        <span className={styles.dotLeaders}></span>
        <span>{item.price}</span>
      </button>
    </li>
  );
}
