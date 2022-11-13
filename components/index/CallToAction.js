import styles from '../../styles/index/CallToAction.module.css';
import { useContext } from 'react';
import { AppContext } from '../../AppContext';
import Image from 'next/image';
import CoralBits from '../../public/images/coral-bits.png';
import { useAddToCart } from '../../hooks/useAddToCart';

export default function CallToAction() {
  const { cartItems, setCartItems } = useContext(AppContext);
  const { handleAddToCart } = useAddToCart(cartItems, setCartItems);

  return (
    <>
      <article className={styles.callToAction}>
        <Image src={CoralBits} alt="Don't forget a side of Coral Bits!" />
        <h2>Don&apos;t forget a side of Coral Bits!</h2>
        <button onClick={handleAddToCart} data-value='Coral Bits' className='primary-button-sq'>
          <img height='25' width='25' src='./images/cart-add.svg' alt='Add to Cart' />
        </button>
      </article>
    </>
  );
}
