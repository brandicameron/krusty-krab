import styles from '../../styles/shared/HamburgerMenu.module.css';

export default function HamburgerMenu({ menuOpen, setMenuOpen }) {
  const handleOpenMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <button
      className={menuOpen ? `${styles.hamburgerBtn} ${styles.slideIn}` : styles.hamburgerBtn}
      onClick={handleOpenMenu}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}
