import styles from '../../styles/shared/AddedToCartModal.module.css';
import { useContext } from 'react';
import { AppContext } from '../../AppContext';

export default function AddedToCartModal() {
  const { itemName } = useContext(AppContext);

  return (
    <section className={styles.successModal}>
      <div className={styles.successModalContent}>
        <p className={styles.addSign}>+</p>
        <img src='./images/cart.svg' alt='' />
        <p className={styles.itemName}>{itemName} added to cart!</p>
      </div>
    </section>
  );
}
