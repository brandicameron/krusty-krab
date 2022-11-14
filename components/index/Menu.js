import styles from '../../styles/index/Menu.module.css';
import { menuItems } from '../../data/menuItems';
import MenuItem from './MenuItem';
import { v4 as uuidv4 } from 'uuid';

export default function Menu() {
  return (
    <section className={styles.menuContainer} id='menu'>
      <h1 className='display-text'>Galley Grub</h1>
      <h2>Click an item to add to cart.</h2>
      <div className={styles.menu}>
        <ul className={`${styles.menuItems} ${styles.columns}`}>
          {menuItems.slice(0, 10).map((item) => (
            <MenuItem key={uuidv4()} item={item} />
          ))}
        </ul>
        <ul className={styles.menuItems}>
          {menuItems.slice(10, 12).map((item) => (
            <MenuItem key={uuidv4()} item={item} />
          ))}
        </ul>
        <ul className={styles.menuItems}>
          {menuItems.slice(12, 14).map((item) => (
            <MenuItem key={uuidv4()} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
}
