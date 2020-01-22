import React from 'react';

import Sidebar from './Sidebar';
import Header from './Header';
import Realtors from './Realtors';
// import Features from './Features';

import styles from '../styles/base.scss';

const App = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <Header />
      <Realtors />
      <Features />
    </div>
  );
};

export default App;
