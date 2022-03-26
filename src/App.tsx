import { Layout } from 'antd';
import React, { FC } from 'react';
import OfferFooter from './components/Footer/OfferFooter';
import NavBar from './components/Header/NavBar';
import Main from './components/Main/Main';
import './index.css'

const App:FC = () => {

  return (   
    <Layout>
      <NavBar />
      <Main />
      <OfferFooter />
    </Layout>
  );
}

export default App;
