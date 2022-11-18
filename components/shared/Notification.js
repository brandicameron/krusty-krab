import styles from '../../styles/shared/Notification.module.css';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../AppContext';
import Image from 'next/image';
import SpongeBob from '../../public/images/sb.png';
import BubbleTail from '../../public/images/tail.svg';

export default function Notification() {
  const [numItems, setNumItems] = useState(0);
  const { itemName, cartItems, addedToCart } = useContext(AppContext);

  useEffect(() => {
    setNumItems(cartItems.get(itemName));
  }, []);

  const itemNameHandlePlural = () => {
    if (numItems > 1) {
      if (itemName.at(-1) === 's') {
        return itemName;
      } else if (itemName.at(-1) === 'y') {
        return itemName.slice(0, -1).trim() + 'ies';
      } else {
        return itemName + 's';
      }
    } else {
      return itemName;
    }
  };

  return (
    <>
      <section
        className={styles.notification}
        aria-live='assertive'
        aria-label={
          addedToCart
            ? `${numItems} {''}
            ${itemNameHandlePlural()} in your cart!`
            : ''
        }
      >
        <Image priority={true} className={styles.spongeBob} src={SpongeBob} alt='' />
        <div className={styles.bubble} aria-hidden='true'>
          <Image className={styles.bubbleTail} src={BubbleTail} alt='' />
          <p className={styles.itemName}>
            {numItems} {''}
            {itemNameHandlePlural()} in your cart!
          </p>
        </div>
      </section>
    </>
  );
}
