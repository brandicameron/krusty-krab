import styles from '../styles/Home.module.css';
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Light from '../public/images/light.png';
import Header from '../components/index/Header';
import Banner from '../components/index/Banner';
import CallToAction from '../components/index/CallToAction';
import Menu from '../components/index/Menu';
import Employee from '../components/index/Employee';
import Footer from '../components/shared/Footer';

export default function Home() {
  const [numItemsInCart, setNumItemsInCart] = useState(0);

  return (
    <div className={styles.container}>
      <Head>
        <title>The Krusty Krab | Come Spend Your Money Here!</title>
        <meta
          name='description'
          content='Welcome to the Krusty Krab — home of the world famous Krabby Patty and the most popular restaurant in Bikini Bottom!'
        />
        <link rel='icon' href='/favicon.ico' />
        <meta
          property='og:title'
          content='The Krusty Krab — home of the world famous Krabby Patty!'
        />
        <meta property='og:image' content='/share.jpg' />
      </Head>

      <a className='skip-to-content-link' href='#skip-target'>
        Skip to content
      </a>
      <Image priority className={styles.light} src={Light} alt='' />
      <Header numItemsInCart={numItemsInCart} />
      <Banner setNumItemsInCart={setNumItemsInCart} />
      <CallToAction setNumItemsInCart={setNumItemsInCart} />
      <Menu />
      <Employee />
      <Footer />
    </div>
  );
}
