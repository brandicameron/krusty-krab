import styles from '../../styles/shared/CartLink.module.css';
import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../AppContext';
import Link from 'next/link';

export default function CartLink() {
  const [newItemAdded, setNewItemAdded] = useState(false);
  const { numItemsInCart } = useContext(AppContext);

  // Makes number bubble above cart animate when new item added
  useEffect(() => {
    setNewItemAdded(true);
    let timer = setTimeout(() => {
      setNewItemAdded(false);
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [numItemsInCart]);

  return (
    <div className={styles.cartContainer}>
      <Link href='cart' aria-label={`Shopping Card: ${numItemsInCart} items.`}>
        <img src='./images/cart.svg' alt='' />
        <small
          className={styles.numItemsInCart}
          style={{ transform: newItemAdded ? 'scale(1.2)' : 'scale(1)' }}
          aria-hidden='true'
        >
          {numItemsInCart}
        </small>
      </Link>
    </div>
  );
}
