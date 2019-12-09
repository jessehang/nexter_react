import React from 'react';

import Sidebar from './Sidebar';
import styles from './base.scss';

const App = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
    </div>
  );
};

export default App;
