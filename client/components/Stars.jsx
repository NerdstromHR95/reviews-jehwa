import React from 'react';

const Stars = (props) => {
  const star = 80 * props.star / 5;
  return (
    <div className="star-ratings-css">
      <div className="star-ratings-css-top" style={{width: star}}>
        <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
      </div>
      <div className="star-ratings-css-bottom">
        <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
      </div>
    </div>
  );
};

export default Stars;
