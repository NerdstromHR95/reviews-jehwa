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
  const star = 150 * (props.aveStar) / 5;

  return (
    <div className="reviewSummary">
      <div className="summaryTitle">
        REVIEWS
      </div>
      <div className="summaryStar">
        <div className="star-ratings-summary">
          <div className="star-ratings-main">
            <div className="star-ratings-summary-top">
              <span className="top" style={{width: star || 0}}>
                <svg height="24" width="24">
                  <path d="M 11.996 1.5 l 2.6 8.02 H 23 l -6.802 4.959 l 2.596 8.021 l -6.798 -4.958 L 5.198 22.5 l 2.596 -8.021 L 1 9.52 h 8.4 Z" />
                </svg>
                <svg height="24" width="24">
                  <path d="M 11.996 1.5 l 2.6 8.02 H 23 l -6.802 4.959 l 2.596 8.021 l -6.798 -4.958 L 5.198 22.5 l 2.596 -8.021 L 1 9.52 h 8.4 Z" />
                </svg>
                <svg height="24" width="24">
                  <path d="M 11.996 1.5 l 2.6 8.02 H 23 l -6.802 4.959 l 2.596 8.021 l -6.798 -4.958 L 5.198 22.5 l 2.596 -8.021 L 1 9.52 h 8.4 Z" />
                </svg>
                <svg height="24" width="24">
                  <path d="M 11.996 1.5 l 2.6 8.02 H 23 l -6.802 4.959 l 2.596 8.021 l -6.798 -4.958 L 5.198 22.5 l 2.596 -8.021 L 1 9.52 h 8.4 Z" />
                </svg>
                <svg height="24" width="24">
                  <path d="M 11.996 1.5 l 2.6 8.02 H 23 l -6.802 4.959 l 2.596 8.021 l -6.798 -4.958 L 5.198 22.5 l 2.596 -8.021 L 1 9.52 h 8.4 Z" />
                </svg>
              </span>
            </div>
            <div className="star-ratings-summary-bottom">
              <span>
                <svg height="24" width="24">
                  <path d="M 11.996 1.5 l 2.6 8.02 H 23 l -6.802 4.959 l 2.596 8.021 l -6.798 -4.958 L 5.198 22.5 l 2.596 -8.021 L 1 9.52 h 8.4 Z" />
                </svg>
                <svg height="24" width="24">
                  <path d="M 11.996 1.5 l 2.6 8.02 H 23 l -6.802 4.959 l 2.596 8.021 l -6.798 -4.958 L 5.198 22.5 l 2.596 -8.021 L 1 9.52 h 8.4 Z" />
                </svg>
                <svg height="24" width="24">
                  <path d="M 11.996 1.5 l 2.6 8.02 H 23 l -6.802 4.959 l 2.596 8.021 l -6.798 -4.958 L 5.198 22.5 l 2.596 -8.021 L 1 9.52 h 8.4 Z" />
                </svg>
                <svg height="24" width="24">
                  <path d="M 11.996 1.5 l 2.6 8.02 H 23 l -6.802 4.959 l 2.596 8.021 l -6.798 -4.958 L 5.198 22.5 l 2.596 -8.021 L 1 9.52 h 8.4 Z" />
                </svg>
                <svg height="24" width="24">
                  <path d="M 11.996 1.5 l 2.6 8.02 H 23 l -6.802 4.959 l 2.596 8.021 l -6.798 -4.958 L 5.198 22.5 l 2.596 -8.021 L 1 9.52 h 8.4 Z" />
                </svg>
              </span>
            </div>
            <span className="reviewCount">
              {` (${props.totalReviews})`}
            </span>
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
        Write a Review
      </div>
    </div>
  );
};

export default ReviewSummary;
