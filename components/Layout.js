import { useContext } from 'react';
import { AppContext } from '../AppContext';
import Footer from './shared/Footer';
import Header from './shared/Header';
import AddedToCartModal from './shared/AddedToCartModal';

export default function Layout({ children }) {
  const { addedToCart } = useContext(AppContext);
  return (
    <>
      {addedToCart && <AddedToCartModal />}
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
