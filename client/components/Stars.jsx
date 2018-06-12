import React from 'react';
import styles from '../main.css'

const Stars = (props) => {
  const star = props.star / 5 * 100;
  return (
      <div className={styles.starRatingsCss}>
        <div className={styles.starRatingsCssTop} style={{width: `${star}%`}}>
          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
        </div>
        <div className={styles.starRatingsCssBottom}>
          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
        </div>
      </div>
  );
};

export default Stars;
