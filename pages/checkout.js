import styles from '../styles/checkout/Checkout.module.css';
import Head from 'next/head';
import Link from 'next/link';

export default function Checkout() {
  return (
    <section className={styles.checkout}>
      <Head>
        <title>The Krusty Krab | Checkout</title>
      </Head>
      <h1>
        Okay, how far are we really going to take this? <span>😆</span>
      </h1>
      <Link className='primary-button' href='/'>
        Go Home
      </Link>
    </section>
  );
}
