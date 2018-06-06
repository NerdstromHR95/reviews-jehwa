import React from 'react';

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
  const star = 100 * (props.aveStar) / 5;

  return (
    <div className="reviewSummary">
      <div className="summaryTitle">
        REVIEWS
      </div>
      <div className="summaryBody">
        <div className="summaryStar">
          <div className="star-ratings-summary">
            <div className="star-ratings-main">
              <div className="star-ratings-css-top" style={{width: star || 0}}>
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <div className="star-ratings-css-bottom">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
            </div>
            <div className="reviewCount">
              {`(${props.totalReviews})`}
            </div>
          </div>
        </div>
        <div className="summaryRating">
          <div>
            <strong>
              Fit rating:
            </strong>
            <span>
              {fitRating[props.aveFitRating]}
            </span>
          </div>
          <div>
            <strong>
              Width rating:
            </strong>
            <span>
              {widthRating[props.aveWidthRating]}
            </span>
          </div>
        </div>
        <div className="writeReview">
          <div>
            Write a Review
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSummary;
