import styles from '../../styles/shared/Header.module.css';
import { useState } from 'react';
import Light from '../../public/images/light.png';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../public/images/krusty-krab-logo.png';
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
          <Image src={Logo} alt='Krusty Krab Logo' priority />
        </Link>
        <HamburgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <ul className={menuOpen ? styles.slideIn : ''}>
          <NavLink link='/' title='Home' setMenuOpen={setMenuOpen} />
          <NavLink link='/#menu' title='Menu' setMenuOpen={setMenuOpen} />
          <NavLink link='/#location' title='Location' setMenuOpen={setMenuOpen} />
          <NavLink link='/team' title='Our Team' setMenuOpen={setMenuOpen} />
        </ul>
      </nav>
      <CartLink />
    </header>
  );
}
