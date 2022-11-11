import styles from '../../styles/index/Employee.module.css';
import Image from 'next/image';
import employeeOfMonthPic from '../../public/images/employee-of-month.jpg';

export default function Employee() {
  return (
    <section className={styles.employeeContainer}>
      <h1 className='display-text'>Employee of the Month</h1>
      <figure>
        <Image src={employeeOfMonthPic} alt='' />
        <figcaption>Spongebob Squarepants</figcaption>
      </figure>
    </section>
  );
}
