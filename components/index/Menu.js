import styles from '../../styles/index/Menu.module.css';
import { menuItems } from '../../data/menuItems';
import MenuItem from './MenuItem';
import { v4 as uuidv4 } from 'uuid';
import { motion } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';

export default function Menu() {
  const shouldReduceMotion = useReducedMotion();

  const raiseIntoView = {
    initial: {
      y: shouldReduceMotion ? '0px' : '30px',
      opacity: 0,
    },
    whileInView: {
      y: '0',
      opacity: 1,
    },
    transition: {
      duration: 2,
      delay: 2,
    },
    viewport: {
      once: true,
    },
  };

  return (
    <section className={styles.menuContainer} id='menu'>
      <motion.h1 className='display-text'>Galley Grub</motion.h1>
      <h2>Click an item to add to cart.</h2>
      <div className={styles.menu}>
        <motion.ul
          className={`${styles.menuItems} ${styles.columns}`}
          variants={raiseIntoView}
          initial='initial'
          whileInView='whileInView'
          transition='transition'
          viewport='viewport'
        >
          {menuItems.slice(0, 10).map((item) => (
            <MenuItem key={uuidv4()} item={item} />
          ))}
        </motion.ul>
        <motion.ul
          className={styles.menuItems}
          variants={raiseIntoView}
          initial='initial'
          whileInView='whileInView'
          transition='transition'
          viewport='viewport'
        >
          {menuItems.slice(10, 12).map((item) => (
            <MenuItem key={uuidv4()} item={item} />
          ))}
        </motion.ul>
        <motion.ul
          className={styles.menuItems}
          variants={raiseIntoView}
          initial='initial'
          whileInView='whileInView'
          transition='transition'
          viewport='viewport'
        >
          {menuItems.slice(12, 14).map((item) => (
            <MenuItem key={uuidv4()} item={item} />
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
