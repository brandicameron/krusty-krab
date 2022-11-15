import styles from '../styles/404/404.module.css';
import Link from 'next/link';

export default function FourOhFour() {
  return (
    <section className={styles.container}>
      <h1>You've floated off course!</h1>
      <Link className='primary-button' href='/'>
        Go Home
      </Link>
    </section>
  );
}
