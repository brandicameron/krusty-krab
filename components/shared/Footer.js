import styles from '../../styles/shared/Footer.module.css';
import Image from 'next/image';
import SeaLeaf from '../../public/images/sea-leaf.png';
import CoralPurple from '../../public/images/coral-purple.png';
import CoralOrange from '../../public/images/coral-orange.png';

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className={styles.footer} id='location'>
      <h2 className='display-text'>
        Float <br className={styles.mobileBreak} /> on over!
      </h2>
      <address>Bikini Bottom, 11.6065° N, 165.3768° E</address>
      <a href='https://www.google.com/maps/dir//%2711.6065142,165.3768099%27' target='blank'>
        View Map
      </a>
      <p>Open 7 Days a Week</p>
      <p>10am — 9pm</p>
      <small>&copy; {year} Krusty Krab</small>
      <Image className={styles.seaLeaf} src={SeaLeaf} alt='' />
      <Image className={styles.coralPurple} src={CoralPurple} alt='' />
      <Image className={styles.coralOrange} src={CoralOrange} alt='' />
      <Image className={styles.seaLeaf2} src={SeaLeaf} alt='' />
    </footer>
  );
}
