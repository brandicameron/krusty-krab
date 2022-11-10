import styles from '../../styles/index/Banner.module.css';
import Image from 'next/image';
import KrabbyPatty from '../../public/images/krabby-patty.png';

export default function Banner() {
  return (
    <section className={styles.banner}>
      <div className={styles.content}>
        <h1>
          The Original <span className={styles.attnText}>Krabby Patty</span>
        </h1>
        <Image
          className={styles.krabbyPattyMobile}
          src={KrabbyPatty}
          alt='The World Famous Krabby Patty'
          width={275}
          priority
        />
        <p>
          The world famous secret formula Krabby Patty — you'll fall in love at first bite. Try it
          with cheese!
        </p>
        <button>Order Now!</button>
      </div>
      <Image
        className={styles.krabbyPatty}
        src={KrabbyPatty}
        alt='The World Famous Krabby Patty'
        priority
      />
    </section>
  );
}
