import React from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';

export default ({ children }) => (
  <div className="page-root">
    <Header />
    <div className="page-body">
      {children}
    </div>
    <Footer />
  </div>
)