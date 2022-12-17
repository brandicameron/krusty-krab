import styles from '../../styles/index/MenuItem.module.css';
import { motion } from 'framer-motion';
import AddToCartBtn from '../shared/AddToCartBtn';

export default function MenuItem({ item }) {
  return (
    <li className={styles.menuItem}>
      <AddToCartBtn btnClass='' name={item.name} price={item.price}>
        <span aria-hidden='true'>{item.name}</span>
        <motion.span className={styles.dotLeaders} aria-hidden='true'></motion.span>
        <span aria-hidden='true'>{item.price}</span>
      </AddToCartBtn>
    </li>
  );
}
