import styles from '../../styles/shared/HamburgerMenu.module.css';

export default function HamburgerMenu({ menuOpen, setMenuOpen }) {
  const handleOpenMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <button
      className={menuOpen ? `${styles.hamburgerBtn} ${styles.slideIn}` : styles.hamburgerBtn}
      onClick={handleOpenMenu}
      aria-live='polite'
      aria-label={menuOpen ? 'Close Menu' : 'Open Menu'}
      aria-expanded={menuOpen ? 'true' : 'false'}
    >
      <span aria-hidden='true'></span>
      <span aria-hidden='true'></span>
      <span aria-hidden='true'></span>
    </button>
  );
}
