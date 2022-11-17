import styles from '../../styles/index/Employee.module.css';
import Image from 'next/image';
import EmployeeOfMonthPic from '../../public/images/employee-of-month.jpg';
import { motion } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';

export default function Employee() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className={styles.employeeContainer}>
      <div className={styles.shape}>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'>
          <motion.path
            d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
            className={styles.shapeFill}
            initial={{
              d: 'M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z',
            }}
            animate={{
              d: shouldReduceMotion
                ? 'M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
                : 'M321.39,76.44c58-10.79,154.16-30.13,200-41.86,82.39-16.72,168.19-15.13,245.00-.39C820.98,45,855.67,50,959.66,75.83c80.05,18.48,200.53,15.09,240.34,3V0H0V57.35A600.21,500.21,0,0,0,321.39,76.44Z',
            }}
            transition={{ repeat: Infinity, repeatType: 'reverse', duration: 3 }}
          ></motion.path>
        </svg>
      </div>
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
      <div className={styles.shapeBottom}>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'>
          <motion.path
            d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
            className={styles.shapeFill}
            initial={{
              d: 'M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z',
            }}
            animate={{
              d: shouldReduceMotion
                ? 'M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
                : 'M321.39,76.44c58-10.79,154.16-30.13,200-41.86,82.39-16.72,168.19-15.13,245.00-.39C820.98,45,855.67,50,959.66,75.83c80.05,18.48,200.53,15.09,240.34,3V0H0V57.35A600.21,500.21,0,0,0,321.39,76.44Z',
            }}
            transition={{ repeat: Infinity, repeatType: 'reverse', duration: 3 }}
          ></motion.path>
        </svg>
      </div>
    </section>
  );
}
