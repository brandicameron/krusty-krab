import styles from '../../styles/index/MenuItem.module.css';
import { useContext } from 'react';
import { AppContext } from '../../AppContext';
import { useAddToCart } from '../../hooks/useAddToCart';
import { motion } from 'framer-motion';

export default function MenuItem({ item }) {
  const { addedToCart, cartItems, setCartItems } = useContext(AppContext);
  const { handleAddToCart } = useAddToCart(cartItems, setCartItems);

  return (
    <li className={styles.menuItem}>
      <button
        onClick={handleAddToCart}
        data-value={item.name}
        aria-label={`Add ${item.name} to cart for ${item.price} dollars.`}
        disabled={addedToCart ? true : false}
      >
        <span aria-hidden='true'>{item.name}</span>
        <motion.span className={styles.dotLeaders} aria-hidden='true'></motion.span>
        <span aria-hidden='true'>{item.price}</span>
      </button>
    </li>
  );
}
