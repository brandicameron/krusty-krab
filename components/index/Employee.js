import styles from '../../styles/index/Employee.module.css';
import Image from 'next/image';
import EmployeeOfMonthPic from '../../public/images/employee-of-month.jpg';
import { motion } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';

export default function Employee() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className={styles.employeeContainer}>
      <svg
        className={styles.wavesTop}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 24 150 28'
        preserveAspectRatio='none'
        shapeRendering='auto'
      >
        <defs>
          <path
            id='gentle-wave'
            d='M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z'
          />
        </defs>
        <g className={styles.floatTop}>
          <use xlinkHref='#gentle-wave' x='48' y='0' fill='rgba(183,2,2,1)' />
        </g>
      </svg>

      <h1 className='display-text'>Employee of the Month</h1>
      <figure>
        <motion.div
          className={styles.leftBurst}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: [0, 1.1, 1], originX: 'right' }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.5,
            delay: shouldReduceMotion ? 0 : 0.5,
          }}
          viewport={{ once: true }}
        >
          <div></div>
          <div></div>
          <div></div>
        </motion.div>
        <motion.div
          className={styles.rightBurst}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: [0, 1.1, 1], originX: 'left' }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.5,
            delay: shouldReduceMotion ? 0 : 0.5,
          }}
          viewport={{ once: true }}
        >
          <div></div>
          <div></div>
          <div></div>
        </motion.div>

        <motion.div
          initial={{ clipPath: shouldReduceMotion ? 'circle(35%)' : 'circle(10%)' }}
          whileInView={{ clipPath: 'circle(35%)' }}
          transition={{ duration: 0.3 }}
          viewport={{ margin: '-80px', once: true }}
        >
          <Image src={EmployeeOfMonthPic} alt='' />
        </motion.div>

        <figcaption>SpongeBob SquarePants</figcaption>
      </figure>
      <svg
        className={styles.wavesBottom}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 24 150 28'
        preserveAspectRatio='none'
        shapeRendering='auto'
      >
        <defs>
          <path
            id='gentle-wave'
            d='M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z'
          />
        </defs>
        <g className={styles.floatBottom}>
          <use xlinkHref='#gentle-wave' x='48' y='0' fill='rgba(183,2,2,1)' />
        </g>
      </svg>
    </section>
  );
}
