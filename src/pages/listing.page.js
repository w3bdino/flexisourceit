import React from 'react';
import Header from '../components/layout/header/header';
import Footer from '../components/layout/footer/footer';
import DataList from '../components/listing/listing';

const ListingPage = (props) => {

  return (
    <>
      <Header />
      <DataList />
      <Footer />
    </>
  )
};

export default ListingPage;