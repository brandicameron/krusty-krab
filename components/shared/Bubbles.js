import styles from '../../styles/shared/Bubbles.module.css';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Bubble from '../../public/images/bubble.svg';

export default function Bubbles() {
  const [windowHeight, setWindowHeight] = useState(null);

  useEffect(() => {
    const innerHeight = window.document.body.offsetHeight;
    setWindowHeight(innerHeight);
  }, []);

  return (
    <div className={styles.bubbles}>
      <Image
        className={styles.bubble1}
        src={Bubble}
        alt=''
        style={{ transform: `translateY(-${windowHeight}px) translateX(0)` }}
      />
      <Image
        className={styles.bubble2}
        src={Bubble}
        alt=''
        style={{ transform: `translateY(-${windowHeight}px) translateX(0)` }}
      />
      <Image
        className={styles.bubble3}
        src={Bubble}
        alt=''
        style={{ transform: `translateY(-${windowHeight}px) translateX(0)` }}
      />
      <Image
        className={styles.bubble4}
        src={Bubble}
        alt=''
        style={{ transform: `translateY(-${windowHeight}px) translateX(0)` }}
      />
    </div>
  );
}
