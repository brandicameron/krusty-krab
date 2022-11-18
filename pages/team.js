import styles from '../styles/team/Team.module.css';
import Image from 'next/image';
import Krabs from '../public/images/krabs.jpg';
import SpongeBob from '../public/images/spongebob.png';
import Squidward from '../public/images/squidward.jpg';

export default function Team() {
  return (
    <section className={styles.teamContainer}>
      <h1 className='display-text'>Our Team</h1>
      <div className={styles.team}>
        <figure>
          <q>A 5-letter word for happiness -MONEY.</q>
          <Image src={Krabs} alt='' />
          <figcaption>Eugene H. Krabs, Owner</figcaption>
        </figure>
        <figure>
          <q>
            All I know is fine dining <br /> and breathing.
          </q>
          <Image src={SpongeBob} alt='' />
          <figcaption>SpongeBob SquarePants, Fry Cook</figcaption>
        </figure>
        <figure>
          <q>Please come again when I'm not working.</q>
          <Image src={Squidward} alt='' />
          <figcaption>Squidward Q. Tentacles, Cashier</figcaption>
        </figure>
      </div>
    </section>
  );
}
