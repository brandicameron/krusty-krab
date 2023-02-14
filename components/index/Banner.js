import styles from '../../styles/index/Banner.module.css';
import Image from 'next/image';
import KrabbyPatty from '../../public/images/krabby-patty.png';
import Flower1 from '../../public/images/flower-1.svg';
import Flower2 from '../../public/images/flower-2.svg';
import Flower3 from '../../public/images/flower-3.svg';
import AddToCartBtn from '../shared/AddToCartBtn';

export default function Banner() {
  return (
    <section className={styles.banner} id='skip-target'>
      <Image priority={true} className={styles.flower1} src={Flower1} alt='' />
      <Image className={styles.flower2} src={Flower2} alt='' />
      <Image className={styles.flower3} src={Flower3} alt='' />
      <div className={styles.content}>
        <Image
          className={styles.krabbyPattyImg}
          src={KrabbyPatty}
          alt='The World Famous Krabby Patty'
          priority={true}
        />
        <h1>
          Home of the world famous{' '}
          <span className={styles.headingText}>
            <span className='sr-only'>Krabby Patty</span>
          </span>
        </h1>
        <p>Try our secret formula Krabby Patty — you&apos;ll fall in love at first bite.</p>
        <AddToCartBtn btnClass='primary-button' name='Krabby Patty' price='1.25'>
          Add to cart
        </AddToCartBtn>
      </div>
    </section>
  );
}
