import styles from '../../styles/shared/Bubbles.module.css';
import Image from 'next/image';
import Bubble from '../../public/images/bubble.svg';

export default function Bubbles() {
  return (
    <div className={styles.bubbles}>
      <Image className={styles.bubble1} src={Bubble} alt='' />
      <Image className={styles.bubble2} src={Bubble} alt='' />
      <Image className={styles.bubble3} src={Bubble} alt='' />
      <Image className={styles.bubble4} src={Bubble} alt='' />
    </div>
  );
}
