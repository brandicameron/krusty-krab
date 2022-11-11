import styles from '../../styles/index/CallToAction.module.css';
import Image from 'next/image';
import CoralBits from '../../public/images/coral-bits.png';
import { useAddToCart } from '../../hooks/useAddToCart';

export default function CallToAction({ cartItems, setCartItems }) {
  const { handleAddToCart } = useAddToCart(cartItems, setCartItems);

  return (
    <article className={styles.callToAction}>
      <Image src={CoralBits} alt="Don't forget a side of Coral Bits!" />
      <h2>Don't forget a side of Coral Bits!</h2>
      <button onClick={handleAddToCart} data-value='Coral Bits'>
        <img height='25' width='25' src='./images/cart-add.svg' alt='Add to Cart' />
      </button>
    </article>
  );
}
