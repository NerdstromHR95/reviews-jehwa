import React from 'react';

const PageList = (props) => {
  if (props.page === '...') {
    return (
      <span>
        {props.page}
      </span>
    );
  }
  return (
    <span
      className={props.currentPage === props.page ? 'clickable active' : 'clickable'}
      onClick={e => props.select(e.target.innerHTML)}
    >
      {props.page}
    </span>
  );
};

export default PageList;
