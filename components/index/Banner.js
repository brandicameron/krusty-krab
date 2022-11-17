import styles from '../../styles/index/Banner.module.css';
import { useContext } from 'react';
import { AppContext } from '../../AppContext';
import Image from 'next/image';
import KrabbyPatty from '../../public/images/krabby-patty.png';
import Flower1 from '../../public/images/flower-1.svg';
import Flower2 from '../../public/images/flower-2.svg';
import Flower3 from '../../public/images/flower-3.svg';
import { useAddToCart } from '../../hooks/useAddToCart';

export default function Banner() {
  const { cartItems, setCartItems } = useContext(AppContext);
  const { handleAddToCart } = useAddToCart(cartItems, setCartItems);

  return (
    <section className={styles.banner} id='skip-target'>
      <Image className={styles.flower1} src={Flower1} alt='' />
      <Image className={styles.flower2} src={Flower2} alt='' />
      <Image className={styles.flower3} src={Flower3} alt='' />
      <div className={styles.content}>
        <h1>
          Home of the world famous{' '}
          <span className={styles.headingText} aria-label='Krabby Patty'></span>
        </h1>
        <p>Try our secret formula Krabby Patty — you&apos;ll fall in love at first bite.</p>
        <button
          className='primary-button'
          onClick={handleAddToCart}
          data-value='Krabby Patty'
          aria-label='Add a Krabby Patty to the cart.'
        >
          Add to cart
        </button>
        <Image
          className={styles.krabbyPattyImg}
          src={KrabbyPatty}
          alt='The World Famous Krabby Patty'
          priority
        />
      </div>
    </section>
  );
}
