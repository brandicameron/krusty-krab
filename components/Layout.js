import { useContext } from 'react';
import { AppContext } from '../AppContext';
import Footer from './shared/Footer';
import Header from './shared/Header';
import CartNotification from './shared/CartNotification';

export default function Layout({ children }) {
  const { addedToCart } = useContext(AppContext);
  return (
    <>
      {addedToCart && <CartNotification />}
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
