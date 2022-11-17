import styles from '../../styles/shared/CartNotification.module.css';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../AppContext';
import Image from 'next/image';
import SpongeBob from '../../public/images/sb.png';
import BubbleTail from '../../public/images/tail.svg';

export default function AddedToCartModal() {
  const [numItems, setNumItems] = useState(0);
  const { itemName, cartItems } = useContext(AppContext);

  useEffect(() => {
    setNumItems(cartItems.get(itemName));
  }, []);

  const handlePlural = () => {
    if (numItems > 1) {
      if (itemName.at(-1) === 's') {
        return;
      } else if (itemName.at(-1) === 'y') {
        return 'ies';
      } else {
        return 's';
      }
    } else {
      return;
    }
  };

  const handleEndsWithY = () => {
    if (numItems > 1) {
      if (itemName.at(-1) === 'y') {
        return itemName.slice(0, -1).trim();
      } else {
        return itemName;
      }
    } else {
      return itemName;
    }
  };

  return (
    <>
      <section className={styles.successModal}>
        <Image className={styles.spongeBob} src={SpongeBob} alt='' />
        <div className={styles.bubble}>
          <Image className={styles.bubbleTail} src={BubbleTail} alt='' />
          <p className={styles.itemName}>
            {numItems} {handleEndsWithY()}
            {handlePlural()} in your cart!
          </p>
        </div>
      </section>
    </>
  );
}
