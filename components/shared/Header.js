import styles from '../../styles/shared/Header.module.css';
import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../AppContext';
import Light from '../../public/images/light.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [newItemAdded, setNewItemAdded] = useState(false);
  const { numItemsInCart } = useContext(AppContext);

  const handleOpenMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  // Makes number bubble above cart animate when new item added
  useEffect(() => {
    setNewItemAdded(true);
    let timer = setTimeout(() => {
      setNewItemAdded(false);
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [numItemsInCart]);

  return (
    <header className={styles.header}>
      <Image priority className={styles.light} src={Light} alt='' />
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
      <nav className={styles.navigation}>
        <button
          className={menuOpen ? `${styles.hamburgerBtn} ${styles.slideIn}` : styles.hamburgerBtn}
          onClick={handleOpenMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        {/* Adding scroll={false} makes smooth scrolling work again */}
        <ul className={menuOpen ? styles.slideIn : ''}>
          <li onClick={handleCloseMenu}>
            <Link href='/#menu' scroll={false}>
              Menu
            </Link>
          </li>
          <li onClick={handleCloseMenu}>
            <Link href='/#footer' scroll={false}>
              Location
            </Link>
          </li>
          <li onClick={handleCloseMenu}>
            <Link href='/'>Our Team</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.cartContainer}>
        <Link href='cart'>
          <img src='./images/cart.svg' alt='Shopping Cart' />
          <small
            className={styles.numItemsInCart}
            style={{ transform: newItemAdded ? 'scale(1.2)' : 'scale(1)' }}
          >
            {numItemsInCart}
          </small>
        </Link>
      </div>
    </header>
  );
}
