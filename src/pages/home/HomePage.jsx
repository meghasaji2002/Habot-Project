import React from 'react';
import Header from '../../layout/header/Header';
import Banner from './components/banner/Banner';
import ReadyToDive from './components/readyToDive/ReadyToDive';
import BuyerSupplier from './components/buyerSupplier/BuyerSupplier';
import SuppliersFindYou from './components/suppliersFindYou/SuppliersFindYou';
import HowItWorks from './components/howItWorks/HowItWorks';
import Footer from '../../layout/footer/Footer';

function HomePage() {
  return (
    <>
    <Header/>
    <Banner/>
    <ReadyToDive/>
    <BuyerSupplier/>
    <SuppliersFindYou/>
    <HowItWorks/>
    <Footer/>
    </>
  )
}

export default HomePage
