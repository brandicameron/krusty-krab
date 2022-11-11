import styles from '../../styles/index/Banner.module.css';
import { useContext } from 'react';
import { AppContext } from '../../AppContext';
import Image from 'next/image';
import KrabbyPatty from '../../public/images/krabby-patty.png';
import AddedToCartModal from '../shared/AddedToCartModal';
import { useAddToCart } from '../../hooks/useAddToCart';

export default function Banner() {
  const { cartItems, setCartItems } = useContext(AppContext);
  const { handleAddToCart, addedToCart } = useAddToCart(cartItems, setCartItems);

  return (
    <section className={styles.banner} id='skip-target'>
      {addedToCart && <AddedToCartModal />}
      {/* <AddedToCartModal /> */}
      <div className={styles.content}>
        <h1>
          The Original <span className='display-text'>Krabby Patty</span>
        </h1>
        <p>The world famous secret formula Krabby Patty — you'll fall in love at first bite.</p>
        <button onClick={handleAddToCart} data-value='Krabby Patty'>
          Add to cart
        </button>
        <Image src={KrabbyPatty} alt='The World Famous Krabby Patty' priority />
      </div>
    </section>
  );
}
