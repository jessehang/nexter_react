import React from 'react';
import styles from '../styles/realtors.scss';
import font from '../styles/typography.scss';
import realtor1 from '../../../img/realtor-1.jpeg';
import realtor2 from '../../../img/realtor-2.jpeg';
import realtor3 from '../../../img/realtor-3.jpeg';

const Realtors = () => {
  return (
    <div className={styles.container}>
      <h3 className={font.heading3}>Top 3 Realtors</h3>
      <div className={styles.realtorsList}>
        <img src={realtor1} alt="Realtor 1" className={styles.image} />
        <div>
          <h4 className={`${font.heading4} ${font.heading4Light}`}>
            Erik Feinman
          </h4>
          <p className={styles.sold}>245 houses sold</p>
        </div>

        <img src={realtor2} alt="Realtor 2" className={styles.image} />
        <div>
          <h4 className={`${font.heading4} ${font.heading4Light}`}>
            Kim Brown
          </h4>
          <p className={styles.sold}>212 houses sold</p>
        </div>

        <img src={realtor3} alt="Realtor 3" className={styles.image} />
        <div>
          <h4 className={`${font.heading4} ${font.heading4Light}`}>
            Toby Ramsey
          </h4>
          <p className={styles.sold}>298 houses sold</p>
        </div>
      </div>
    </div>
  );
};

export default Realtors;
