import React from 'react';
import Header from '../components/layout/header/header';
import Footer from '../components/layout/footer/footer';
import DataDetail from '../components/detail/data.detail.component.js';

const ListingDetailPage = (props) => {

  return (
    <>
      <Header />
      <DataDetail />
      <Footer />
    </>
  )
};

export default ListingDetailPage;