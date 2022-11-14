import { useContext } from 'react';
import { AppContext } from '../AppContext';
import Footer from './shared/Footer';
import Header from './shared/Header';
import CartNotification from './shared/CartNotification';
import Bubbles from './shared/Bubbles';

export default function Layout({ children }) {
  const { addedToCart } = useContext(AppContext);
  return (
    <>
      <Bubbles />
      {addedToCart && <CartNotification />}
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
