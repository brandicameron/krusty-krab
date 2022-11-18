import { useContext } from 'react';
import { AppContext } from '../AppContext';
import Footer from './shared/Footer';
import Header from './shared/Header';
import Notification from './shared/Notification';
import Bubbles from './shared/Bubbles';

export default function Layout({ children }) {
  const { addedToCart } = useContext(AppContext);
  return (
    <>
      <Bubbles />
      {addedToCart && <Notification />}
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
