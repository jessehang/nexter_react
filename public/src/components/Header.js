import React from 'react';
import styles from '../styles/header.scss';
import font from '../styles/typography.scss';
import logo from '../../../img/logo.png';

const Header = () => {
  return (
    <header className={styles.container}>
      <img src={logo} alt="Nexter logo" className={styles.logo} />
      <h3 className={font.heading3}>Your own home:</h3>
      <h3 className={font.heading1}>The ultimate personal freedom</h3>
    </header>
  );
};

export default Header;
