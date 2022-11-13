import styles from '../../styles/shared/Header.module.css';
import { useState } from 'react';
import Light from '../../public/images/light.png';
import Image from 'next/image';
import Link from 'next/link';
import HamburgerMenu from './HamburgerMenu';
import NavLink from './NavLink';
import CartLink from './CartLink';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Image priority className={styles.light} src={Light} alt='' />

      <nav className={styles.navigation}>
        <a className={styles.skipToContent} href='#skip-target'>
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
        <HamburgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <ul className={menuOpen ? styles.slideIn : ''}>
          <NavLink link='/#menu' title='Menu' setMenuOpen={setMenuOpen} />
          <NavLink link='/#location' title='Location' setMenuOpen={setMenuOpen} />
          <NavLink link='/' title='Our Team' setMenuOpen={setMenuOpen} />
        </ul>
      </nav>
      <CartLink />
    </header>
  );
}
