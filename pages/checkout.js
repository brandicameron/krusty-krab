import styles from '../styles/checkout/Checkout.module.css';
import Head from 'next/head';
import Link from 'next/link';

export default function Checkout() {
  return (
    <section className={styles.checkout}>
      <Head>
        <title>The Krusty Krab | Checkout</title>
        <meta
          name='description'
          content='Welcome to the Krusty Krab, home of the world famous Krabby Patty and the most popular restaurant in Bikini Bottom!'
        />
        <link rel='icon' href='/favicon.ico' />
        <meta
          property='og:title'
          content='The Krusty Krab, home of the world famous Krabby Patty!'
        />
        <meta property='og:image' content='/share.jpg' />
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
