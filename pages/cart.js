import styles from '../styles/cart/Cart.module.css';
import Link from 'next/link';
import { useContext } from 'react';
import { AppContext } from '../AppContext';
import { menuItems } from '../data/menuItems';
import { v4 as uuidv4 } from 'uuid';

export default function Cart() {
  const { cartItems } = useContext(AppContext);

  const shoppingCart = Array.from(cartItems, ([key, value]) => {
    let itemPrice = menuItems.find((el) => el.name === key);
    return { name: key, quantity: value, price: parseFloat(itemPrice.price) };
  });

  const total = shoppingCart.reduce((total, obj) => parseFloat(obj.price) + total, 0);

  //TODO - Make quantity buttons work
  const handleUpdateQuantity = () => {
    // what to do here???
  };

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
            <p>${item.price.toFixed(2)}</p>
          </li>
        ))}
      </ul>
      <div className={styles.total}>
        <h3>Total</h3>
        <p className={styles.totalPrice}>${total.toFixed(2)}</p>
      </div>
      <Link href='checkout' className={styles.checkoutBtn}>
        Checkout
      </Link>
    </section>
  );
}
