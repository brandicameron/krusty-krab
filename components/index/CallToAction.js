import styles from '../../styles/index/CallToAction.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';
import CoralBits from '../../public/images/coral-bits.png';
import AddtoCartIcon from '../../public/images/cart-add.svg';
import AddToCartBtn from '../shared/AddToCartBtn';

export default function CallToAction() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <article className={styles.callToAction}>
        <motion.div
          initial={{ x: shouldReduceMotion ? '0px' : '-175px' }}
          whileInView={{ x: '0px' }}
          transition={{ duration: 0.3 }}
          viewport={{ amount: 0.3, once: true }}
        >
          <Image src={CoralBits} alt="Don't forget a side of Coral Bits!" />
        </motion.div>
        <h2>Don&apos;t forget a side of Coral Bits!</h2>
        <AddToCartBtn btnClass='primary-button-sq' data='Coral Bits'>
          <Image src={AddtoCartIcon} alt='Add to Cart' />
        </AddToCartBtn>
      </article>
    </>
  );
}
