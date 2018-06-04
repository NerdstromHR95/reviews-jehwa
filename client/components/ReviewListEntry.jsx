import React from 'react';
import ReactDOM from 'react-dom';

const ReviewListEntry = (props) => {
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
  if(props.review.fitRating && props.review.widthRating) {
    return (
      <div className="review">
        <div className="leftColumn">
          <div className="title">
            {props.review.title}
          </div>
          <div className="description">
            {props.review.description}
          </div>
          <div className="reviewerInfo">
            <span>
              {props.review.nickname}
            </span>
            <span>
              Sweepstakes entry
            </span>
          </div>
        </div>
        <div className="rightColumn">
          <span>
            {new Date(props.review.date).toLocaleString('en-US', { year: 'numeric', day: 'numeric', month: 'long' })}
          </span>
          <div>
            <strong>
              Fit:
            </strong>
            <span>
              {` ${fitRating[props.review.fitRating]}`}
            </span>
            <br />
            <strong>
              Width:
            </strong>
            <span>
              {` ${widthRating[props.review.widthRating]}`}
            </span>
          </div>
        </div>
      </div>
    );
  }
  if(props.review.fitRating) {
    return(
      <div className="review">
        <div className="leftColumn">
          <div className="title">
            {props.review.title}
          </div>
          <div className="description">
            {props.review.description}
          </div>
          <div className="reviewerInfo">
            <span>
              {props.review.nickname}
            </span>
            <span>
              Sweepstakes entry
            </span>
          </div>
        </div>
        <div className="rightColumn">
          <span>
            {new Date(props.review.date).toLocaleString('en-US', { year: 'numeric', day: 'numeric', month: 'long' })}
          </span>
          <div>
            <strong>
              Fit:
            </strong>
            <span>
              {` ${fitRating[props.review.fitRating]}`}
            </span>
          </div>
        </div>
      </div>
    );
  }
  if(props.review.widthRating) {
    return(
      <div className="review">
        <div className="leftColumn">
          <div className="title">
            {props.review.title}
          </div>
          <div className="description">
            {props.review.description}
          </div>
          <div className="reviewerInfo">
            <span>
              {props.review.nickname}
            </span>
            <span>
              Sweepstakes entry
            </span>
          </div>
        </div>
        <div className="rightColumn">
          <span>
            {new Date(props.review.date).toLocaleString('en-US', { year: 'numeric', day: 'numeric', month: 'long' })}
          </span>
          <div>
            <strong>
              Width:
            </strong>
            <span>
              {` ${widthRating[props.review.widthRating]}`}
            </span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="review">
      <div className="leftColumn">
        <div className="title">
          {props.review.title}
        </div>
        <div className="description">
          {props.review.description}
        </div>
        <div className="reviewerInfo">
          <span>
            {props.review.nickname}
          </span>
          <span>
            Sweepstakes entry
          </span>
        </div>
      </div>
      <div className="rightColumn">
        <span>
          {new Date(props.review.date).toLocaleString('en-US', { year: 'numeric', day: 'numeric', month: 'long' })}
        </span>
      </div>
    </div>
  );
};

export default ReviewListEntry;