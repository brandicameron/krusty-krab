import styles from '../../styles/shared/Header.module.css';
import { useContext } from 'react';
import { AppContext } from '../../AppContext';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const { numItemsInCart } = useContext(AppContext);

  return (
    <header className={styles.header}>
      <a className='skip-to-content-link' href='#skip-target'>
        Skip to content
      </a>
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
