import styles from '../styles/cart/Cart.module.css';
import Link from 'next/link';
import { useContext } from 'react';
import { AppContext } from '../AppContext';
import { menuItems } from '../data/menuItems';
import { v4 as uuidv4 } from 'uuid';

export default function Cart() {
  const { cartItems, setCartItems } = useContext(AppContext);

  const shoppingCart = Array.from(cartItems, ([key, value]) => {
    let itemPrice = menuItems.find((el) => el.name === key);
    return { name: key, quantity: value, price: parseFloat(itemPrice.price) * value };
  });

  const total = shoppingCart.reduce((total, obj) => parseFloat(obj.price) + total, 0);

  const handleUpdateQuantity = (e) => {
    const name = e.currentTarget.getAttribute('data-name');
    let currentQuantity = cartItems.get(name);

    if (e.target.textContent === '-' && cartItems.get(name) > 0) {
      setCartItems((prev) => new Map(prev).set(name, cartItems.get(name) - 1));
      currentQuantity = currentQuantity - 1;
    } else if (e.target.textContent === '+') {
      setCartItems((prev) => new Map(prev).set(name, cartItems.get(name) + 1));
      currentQuantity = currentQuantity + 1;
    }

    // Delete item if quantity updates to zero
    if (currentQuantity === 0) {
      setCartItems((prev) => {
        const newState = new Map(prev);
        newState.delete(name);
        return newState;
      });
    }
  };

  return (
    <div className={styles.container}>
      <section className={styles.cart}>
        <h1 className='display-text'>Your Cart</h1>
        <ul>
          {shoppingCart.map((item) => (
            <li key={uuidv4()}>
              <div>
                <h2>{item.name}</h2>
                <div className={styles.quantity}>
                  <button onClick={handleUpdateQuantity} data-name={item.name}>
                    -
                  </button>
                  <p>{item.quantity}</p>
                  <button onClick={handleUpdateQuantity} data-name={item.name}>
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
