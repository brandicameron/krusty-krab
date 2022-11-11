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
        {/* Adding scroll={false} makes smooth scrolling work again */}
        <ul>
          <li>
            <Link href='/#menu' scroll={false}>
              Menu
            </Link>
          </li>
          <li>
            <Link href='/#footer' scroll={false}>
              Location
            </Link>
          </li>
          <li>
            <Link href='/'>Our Team</Link>
          </li>
          <li className={styles.cartContainer}>
            <Link href='cart'>
              <img src='./images/cart.svg' alt='Shopping Cart' />
              <small className={styles.numItemsInCart}>{numItemsInCart}</small>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
