import styles from '../../styles/index/Header.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href='/' className={styles.logo}>
        {/* <img src='/./images/krusty-krab-logo.png' alt='Krusty Krab Logo' width={175} height={140} /> */}
        <img src='/./images/krusty-krab-logo.png' alt='Krusty Krab Logo' width={200} height={160} />
        {/* <img src='/./images/krusty-krab-logo.png' alt='Krusty Krab Logo' width={240} height={193} /> */}
      </Link>
      <nav>
        <ul>
          <li>
            <a href='/'>Menu</a>
          </li>
          <li>
            <a href='/'>Location</a>
          </li>
          <li>
            <Link href='/'>Our Team</Link>
          </li>
          <li className={styles.cartContainer}>
            <Link href='/'>
              <img src='./images/cart.svg' alt='Shopping Cart' />
              <small className={styles.numItemsInCart}>2</small>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
