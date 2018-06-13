import React from 'react';
import FitRating from './FitRating.jsx';
import WidthRating from './WidthRating.jsx';
import Stars from './Stars.jsx';
import styles from '../main.css'


const ReviewListEntry = props => (
  <div className={styles.review}>
    <div className={styles.leftColumn}>
      <Stars star={props.review.stars} />
      <div className={styles.reviewTitle}>
        <strong>
          {props.review.title}
        </strong>
      </div>
      <div className={styles.description}>
        {props.review.description}
      </div>
      <div className={styles.reviewerInfo}>
        <span>
          {props.review.nickname}
        </span>
        <span>
         {' | Sweepstakes entry'}
        </span>
      </div>
    </div>
    <div className={styles.rightColumn}>
      <span>
        {new Date(props.review.date).toLocaleString('en-US', { year: 'numeric', day: 'numeric', month: 'long' })}
      </span>
      <div className={styles.ratings}>
        <FitRating fit={props.review.fitRating} />
        <WidthRating width={props.review.widthRating} />
      </div>
    </div>
  </div>
);

export default ReviewListEntry;
