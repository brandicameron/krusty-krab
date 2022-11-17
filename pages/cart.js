import styles from '../styles/cart/Cart.module.css';
import Head from 'next/head';
import Link from 'next/link';
import { useUpdateQuantity } from '../hooks/useUpdateQuantity';
import { v4 as uuidv4 } from 'uuid';

export default function Cart() {
  const { handleUpdateQuantity, total, shoppingCart } = useUpdateQuantity();

  return (
    <div className={styles.container}>
      <Head>
        <title>The Krusty Krab | Your Cart</title>
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

      <section className={styles.cart}>
        <h1 className='display-text'>Cart</h1>
        <ul>
          {shoppingCart.map((item) => (
            <li key={uuidv4()}>
              <div>
                <h2>{item.name}</h2>
                <div className={styles.quantity}>
                  <button
                    onClick={handleUpdateQuantity}
                    data-name={item.name}
                    aria-label={`Remove one ${item.name} from the cart.`}
                  >
                    -
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    onClick={handleUpdateQuantity}
                    data-name={item.name}
                    aria-label={`Add one ${item.name} to the cart.`}
                  >
                    +
                  </button>
                </div>
              </div>
              <p>${item.price.toFixed(2)}</p>
            </li>
          ))}
        </ul>
        <div className={styles.total}>
          <h3>Total</h3>
          <p className={styles.totalPrice}>${total.toFixed(2)}</p>
        </div>
        <Link href='checkout' className='primary-button primary-button-mt'>
          Checkout
        </Link>
      </section>
    </div>
  );
}
