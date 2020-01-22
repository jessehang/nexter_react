import React from 'react';
import styles from '../styles/features.scss';

const Features = () => {
  return (
    <div className={styles.container}>
      <div className={styles.feature}>
        <svg className={styles.icon}>
          <use href="../../../img/sprite.svg#icon-global"></use>
        </svg>
      </div>
    </div>
  );
};

export default Features;
