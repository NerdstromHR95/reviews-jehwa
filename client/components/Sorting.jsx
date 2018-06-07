import React from 'react';
import SortingByStars from './SortingByStars.jsx'
import SortingBy from './SortingBy.jsx';

const Sorting = (props) => {
  return (
    <table>
      <tbody>
        <tr>
          <SortingByStars sortedByNumber={props.sortedByNumber}/>
          <SortingBy sortedByNumber={props.sortedByNumber}/>
        </tr>
      </tbody>
    </table>
  );
}

export default Sorting;
