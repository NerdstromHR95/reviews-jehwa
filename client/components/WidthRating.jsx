import React from 'react';

const WidthRating = (props) => {
  const widthRating = {
    0: '',
    1: 'Narrow',
    2: 'Slightly narrow',
    3: 'True to width',
    4: 'Slightly wide',
    5: 'Wide',
  };

  if (props.width) {
    return (
      <div>
        <strong>
          Width:
        </strong>
        <span>
          {` ${widthRating[props.width]}`}
        </span>
      </div>
    );
  } return (
    <div />
  );
};

export default WidthRating;