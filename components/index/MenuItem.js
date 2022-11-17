import styles from '../../styles/index/MenuItem.module.css';
import { useContext } from 'react';
import { AppContext } from '../../AppContext';
import { useAddToCart } from '../../hooks/useAddToCart';
import { motion } from 'framer-motion';

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
        <motion.span className={styles.dotLeaders}></motion.span>
        <span>{item.price}</span>
      </button>
    </li>
  );
}
