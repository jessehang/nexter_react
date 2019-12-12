import React from 'react';
import styles from '../styles/header.scss';
import font from '../styles/typography.scss';
import logo from '../../../img/logo.png';
import bbc from '../../../img/logo-bbc.png';
import forbes from '../../../img/logo-forbes.png';
import techcrunch from '../../../img/logo-techcrunch.png';
import bi from '../../../img/logo-bi.png';

const Header = () => {
  return (
    <header className={styles.container}>
      <img src={logo} alt="Nexter logo" className={styles.logo} />
      <h3 className={font.heading3}>Your own home:</h3>
      <h3 className={font.heading1}>The ultimate personal freedom</h3>
      <button className={`${font.btn} ${styles.btn}`}>
        View our properties
      </button>
      <div className={styles.seenonText}>As seen on</div>
      <div className={styles.seenonLogos}>
        <img src={bbc} alt="Seen on logo 1" />
        <img src={forbes} alt="Seen on logo 2" />
        <img src={techcrunch} alt="Seen on logo 3" />
        <img src={bi} alt="Seen on logo 4" />
      </div>
    </header>
  );
};

export default Header;
