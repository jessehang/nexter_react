import React from 'react';

import Sidebar from './Sidebar';
import Header from './Header';
import styles from '../styles/base.scss';

const App = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <Header />
    </div>
  );
};

export default App;
