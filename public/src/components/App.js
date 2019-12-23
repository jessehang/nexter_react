import React from 'react';

import Sidebar from './Sidebar';
import Header from './Header';
import Realtors from './Realtors';

import styles from '../styles/base.scss';

const App = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <Header />
      <Realtors />
    </div>
  );
};

export default App;
