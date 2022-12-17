import styles from '../../styles/shared/Notification.module.css';
import Image from 'next/image';
import { useHandlePlural } from '../../hooks/useHandlePlural';
import SpongeBob from '../../public/images/sb.png';
import BubbleTail from '../../public/images/tail.svg';

export default function Notification() {
  const { itemNameHandlePlural, numItems } = useHandlePlural();

  return (
    <>
      <section
        className={styles.notification}
        aria-live='assertive'
        aria-label={`${numItems} {''}
            ${itemNameHandlePlural()} in your cart!`}
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
