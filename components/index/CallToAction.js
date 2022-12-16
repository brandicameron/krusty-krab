import styles from '../../styles/index/CallToAction.module.css';
import { useContext } from 'react';
import { AppContext } from '../../AppContext';
import Image from 'next/image';
import CoralBits from '../../public/images/coral-bits.png';
import AddtoCartIcon from '../../public/images/cart-add.svg';
import { useAddToCart } from '../../hooks/useAddToCart';
import { motion } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';

export default function CallToAction() {
  const { addedToCart, cartItems, setCartItems } = useContext(AppContext);
  const { handleAddToCart } = useAddToCart(cartItems, setCartItems);
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <article className={styles.callToAction}>
        <motion.div
          initial={{ x: shouldReduceMotion ? '0px' : '-175px' }}
          whileInView={{ x: '0px' }}
          transition={{ duration: 0.3 }}
          viewport={{ amount: 0.3, once: true }}
        >
          <Image src={CoralBits} alt="Don't forget a side of Coral Bits!" />
        </motion.div>
        <h2>Don&apos;t forget a side of Coral Bits!</h2>
        <button
          className='primary-button-sq'
          onClick={handleAddToCart}
          data-value='Coral Bits'
          aria-label='Add Coral Bits to the cart.'
          disabled={addedToCart ? true : false}
        >
          <Image src={AddtoCartIcon} alt='Add to Cart' />
        </button>
      </article>
    </>
  );
}
