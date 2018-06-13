import React from 'react';
import styles from '../main.css'

const ReviewSummary = (props) => {
  const fitRating = {
    0: '',
    1: 'Small',
    2: 'Slightly small',
    3: 'True to size',
    4: 'Slightly large',
    5: 'Large',
  };

  const widthRating = {
    0: '',
    1: 'Narrow',
    2: 'Slightly narrow',
    3: 'True to width',
    4: 'Slightly wide',
    5: 'Wide',
  };
  const star = ((props.aveStar) / 5 * 100) || 0 ;

  return (
    <div className={styles.reviewSummary}>
      <div className={styles.summaryTitle}>
        REVIEWS
      </div>
      <div className={styles.summaryBody}>
        <div className="summaryStar">
          <div className="star-ratings-summary">
            <div className={styles.starRatingsMain}>
              <div className={styles.starRatingsCssTop} style={{width: `${star}%`}}>
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <div className={styles.starRatingsCssBottom}>
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
            </div>
            <div className={styles.reviewCount}>
              {props.totalReviews}
            </div>
          </div>
        </div>
        <div className={styles.summaryRating}>
          <div>
            <strong>
              Fit rating:
            </strong>
            <span className={styles.summaryRatingVal}>
              {fitRating[props.aveFitRating]}
            </span>
          </div>
          <div>
            <strong>
              Width rating:
            </strong>
            <span className={styles.summaryRatingVal}>
              {widthRating[props.aveWidthRating]}
            </span>
          </div>
        </div>
        <div className={styles.writeReview}>
          <div className={styles.writeReviewVal}>
            Write a Review
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSummary;
