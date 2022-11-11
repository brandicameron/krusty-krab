import styles from '../../styles/shared/Footer.module.css';
import Image from 'next/image';
import SeaLeaf from '../../public/images/sea-leaf.png';
import CoralPurple from '../../public/images/coral-purple.png';
import CoralOrange from '../../public/images/coral-orange.png';
import Bubble from '../../public/images/bubble.svg';

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className={styles.footer} id='footer'>
      <h2 className='display-text'>
        Float <br className={styles.mobileBreak} /> on over!
      </h2>
      <address>Bikini Bottom, 11.6065° N, 165.3768° E</address>
      <p>Open 7 Days a Week</p>
      <time>10am — 9pm</time>
      <small>&copy; {year} Krusty Krab</small>
      <Image className={styles.seaLeaf} src={SeaLeaf} alt='' />
      <Image className={styles.coralPurple} src={CoralPurple} alt='' />
      <Image className={styles.coralOrange} src={CoralOrange} alt='' />
      <Image className={styles.seaLeaf2} src={SeaLeaf} alt='' />
      <div className={styles.bubbles}>
        <Image className={styles.bubble1} src={Bubble} alt='' />
        <Image className={styles.bubble2} src={Bubble} alt='' />
        <Image className={styles.bubble3} src={Bubble} alt='' />
        <Image className={styles.bubble4} src={Bubble} alt='' />
      </div>
    </footer>
  );
}
