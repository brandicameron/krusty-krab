import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Image from 'next/image';
import Light from '../public/images/light.png';
import Header from '../components/index/Header';
import Banner from '../components/index/Banner';
import CallToAction from '../components/index/CallToAction';

export default function Home() {
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
      <Header />
      <Banner />
      <CallToAction />
    </div>
  );
}
