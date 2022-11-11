import styles from '../../styles/index/Header.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Header({ numItemsInCart }) {
  return (
    <header className={styles.header}>
      <Link href='/' className={styles.logo}>
        <Image
          src='/images/krusty-krab-logo.png'
          alt='Krusty Krab Logo'
          width={200}
          height={160}
          priority
        />
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
              <small className={styles.numItemsInCart}>{numItemsInCart}</small>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
