import styles from '../../styles/index/Menu.module.css';
import Image from 'next/image';
import KelpShake from '../../public/images/kelp-shake.png';

export default function Menu() {
  return (
    <section className={styles.menuContainer}>
      <h1 className='display-text'>Galley Grub</h1>
      <div className={styles.menu}>
        <ul className={`${styles.menuItems} ${styles.columns}`}>
          {menuItems.slice(0, 10).map((item) => (
            <li key={item.title}>
              <h2>{item.title}</h2>
              <span className={styles.dotLeaders}></span>
              <p>{item.price}</p>
            </li>
          ))}
        </ul>
        <ul className={styles.menuItems}>
          {menuItems.slice(10, 12).map((item) => (
            <li key={item.title}>
              <h2>{item.title}</h2>
              <span className={styles.dotLeaders}></span>
              <p>{item.price}</p>
            </li>
          ))}
        </ul>
        <ul className={styles.menuItems}>
          {menuItems.slice(12, 14).map((item) => (
            <li key={item.title}>
              <Image className={styles.kelpShake} src={KelpShake} alt='Delicious Kelp Shake' />
              <h2>{item.title}</h2>
              <span className={styles.dotLeaders}></span>
              <p>{item.price}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const menuItems = [
  {
    title: 'Krabby Patty',
    price: '1.25',
  },
  {
    title: 'Double Krabby Patty',
    price: '2.00',
  },
  {
    title: 'Tripple Krabby Patty',
    price: '3.00',
  },
  {
    title: 'Krabby Meal',
    price: '3.50',
  },
  {
    title: 'Double Krabby Meal',
    price: '3.75',
  },
  {
    title: 'Triple Krabby Meal',
    price: '4.00',
  },
  {
    title: 'Salty Sea Dog',
    price: '1.25',
  },
  {
    title: 'Footlong',
    price: '2.00',
  },
  {
    title: 'Sailors Surprise',
    price: '3.00',
  },
  {
    title: 'Golden Loaf',
    price: '2.00',
  },
  {
    title: 'Coral Bits',
    price: '1.50',
  },
  {
    title: 'Kelp Rings',
    price: '1.50',
  },
  {
    title: 'Seafoam Soda',
    price: '1.25',
  },
  {
    title: 'Kelp Shake',
    price: '2.00',
  },
];
