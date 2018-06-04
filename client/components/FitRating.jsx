import React from 'react';
import ReactDOM from 'react-dom';

const FitRating = (props) => {
  const fitRating = {
    0: '',
    1: 'Small',
    2: 'Slightly small',
    3: 'True to size',
    4: 'Slightly large',
    5: 'Large',
  };

  if(props.fit) {
    return(
      <div>
        <strong>
          Fit:
        </strong>
        <span>
          {` ${fitRating[props.fit]}`}
        </span>
      </div>
    )
  } return (
    <div />
  )

}

export default FitRating;