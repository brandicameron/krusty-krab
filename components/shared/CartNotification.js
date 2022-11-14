import styles from '../../styles/shared/CartNotification.module.css';
import { useContext } from 'react';
import { AppContext } from '../../AppContext';

export default function AddedToCartModal() {
  const { itemName } = useContext(AppContext);

  return (
    <section className={styles.successModal}>
      <div className={styles.cart}>
        <p className={styles.addSign}>+</p>
        <img src='./images/cart.svg' alt='' />
      </div>
      <p className={styles.itemName}>{itemName} added!</p>
    </section>
  );
}
