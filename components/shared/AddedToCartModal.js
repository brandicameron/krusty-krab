import styles from '../../styles/shared/AddedToCartModal.module.css';

export default function AddedToCartModal() {
  return (
    <section className={styles.successModal}>
      <p>Item added to cart!</p>
    </section>
  );
}
