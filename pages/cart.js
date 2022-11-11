import styles from '../styles/cart/Cart.module.css';
import { useContext } from 'react';
import { AppContext } from '../AppContext';
import { v4 as uuidv4 } from 'uuid';

export default function Cart() {
  const { cartItems } = useContext(AppContext);

  const shoppingCart = Array.from(cartItems, ([key, value]) => {
    return { name: key, quantity: value };
  });

  //TODO: Add price to data attribute of buttons, then add price to Map and above array

  return (
    <section className={styles.cart}>
      <h1 className='display-text'>Your Cart</h1>
      <ul>
        {shoppingCart.map((item) => (
          <li key={uuidv4()}>
            <div>
              <h2>{item.name}</h2>
              <div className={styles.quantity}>
                <button>-</button>
                <p>{item.quantity}</p>
                <button>+</button>
              </div>
            </div>
            <p>$6.00</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
