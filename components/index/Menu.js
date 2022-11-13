import styles from '../../styles/index/Menu.module.css';
import { useContext } from 'react';
import { AppContext } from '../../AppContext';
import Image from 'next/image';
import KelpShake from '../../public/images/kelp-shake.png';
import { menuItems } from '../../data/menuItems';
import { useAddToCart } from '../../hooks/useAddToCart';
import AddedToCartModal from '../shared/AddedToCartModal';
import { v4 as uuidv4 } from 'uuid';

export default function Menu() {
  const { cartItems, setCartItems } = useContext(AppContext);
  const { handleAddToCart, addedToCart } = useAddToCart(cartItems, setCartItems);

  return (
    <section className={styles.menuContainer} id='menu'>
      {addedToCart && <AddedToCartModal />}
      <h1 className='display-text'>Galley Grub</h1>
      <h2>Click an item to add to cart.</h2>
      <div className={styles.menu}>
        <ul className={`${styles.menuItems} ${styles.columns}`}>
          {menuItems.slice(0, 10).map((item) => (
            <li key={uuidv4()}>
              <button
                name={`Add ${item.name} to cart`}
                data-value={item.name}
                onClick={handleAddToCart}
                title={`Add ${item.name} to cart.`}
              >
                <span>{item.name}</span>
                <span className={styles.dotLeaders}></span>
                <span>{item.price}</span>
              </button>
            </li>
          ))}
        </ul>
        <ul className={styles.menuItems}>
          {menuItems.slice(10, 12).map((item) => (
            <li key={uuidv4()}>
              <button
                name={`Add ${item.name} to cart`}
                data-value={item.name}
                onClick={handleAddToCart}
                title={`Add ${item.name} to cart.`}
              >
                <span>{item.name}</span>
                <span className={styles.dotLeaders}></span>
                <span>{item.price}</span>
              </button>
            </li>
          ))}
        </ul>
        <ul className={styles.menuItems}>
          {menuItems.slice(12, 14).map((item) => (
            <li key={uuidv4()}>
              <Image className={styles.kelpShake} src={KelpShake} alt='Delicious Kelp Shake' />
              <button
                name={`Add ${item.name} to cart`}
                data-value={item.name}
                onClick={handleAddToCart}
                title={`Add ${item.name} to cart.`}
              >
                <span>{item.name}</span>
                <span className={styles.dotLeaders}></span>
                <span>{item.price}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
