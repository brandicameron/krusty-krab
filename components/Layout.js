import React from 'react';
import Footer from './shared/Footer';
import Header from './shared/Header';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
