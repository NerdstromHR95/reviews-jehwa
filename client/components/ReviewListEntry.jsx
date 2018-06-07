import React from 'react';
import FitRating from './FitRating.jsx';
import WidthRating from './WidthRating.jsx';
import Stars from './Stars.jsx';

const ReviewListEntry = props => (
  <div className="review">
    <div className="leftColumn">
      <Stars star={props.review.stars} />
      <div className="reviewTitle">
        <strong>
          {props.review.title}
        </strong>
      </div>
      <div className="description">
        {props.review.description}
      </div>
      <div className="reviewerInfo">
        <span>
          {props.review.nickname}
        </span>
        <span>
         {' | Sweepstakes entry'}
        </span>
      </div>
    </div>
    <div className="rightColumn">
      <span>
        {new Date(props.review.date).toLocaleString('en-US', { year: 'numeric', day: 'numeric', month: 'long' })}
      </span>
      <div className="ratings">
        <FitRating fit={props.review.fitRating} />
        <WidthRating width={props.review.widthRating} />
      </div>
    </div>
  </div>
);

export default ReviewListEntry;
