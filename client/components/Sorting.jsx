import React from 'react';
import SortingByStars from './SortingByStars.jsx'

const Sorting = (props) => {
  return (
    <table>
      <tbody>
        <tr>
        <SortingByStars sortedByNumber={props.sortedByNumber}/>
        </tr>
      </tbody>
    </table>
  );
}

export default Sorting;
