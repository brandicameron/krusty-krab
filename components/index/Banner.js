import styles from '../../styles/index/Banner.module.css';
import Image from 'next/image';
import KrabbyPatty from '../../public/images/krabby-patty.png';

export default function Banner({ setNumItemsInCart }) {
  const handleAddToCart = () => {
    setNumItemsInCart((prev) => prev + 1);
  };
  return (
    <section className={styles.banner} id='skip-target'>
      <div className={styles.content}>
        <h1>
          The Original <span className='display-text'>Krabby Patty</span>
        </h1>
        <p>
          The world famous secret formula Krabby Patty — you'll fall in love at first bite. Try it
          with cheese!
        </p>
        <button onClick={handleAddToCart}>Order Now!</button>
        <Image src={KrabbyPatty} alt='The World Famous Krabby Patty' priority />
      </div>
    </section>
  );
}
