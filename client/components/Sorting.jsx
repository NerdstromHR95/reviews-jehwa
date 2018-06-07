import React from 'react';
import SortingByStars from './SortingByStars.jsx'
import SortingBy from './SortingBy.jsx';

class Sorting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortByStar: false,
      sortBy: false      
    }
    this.clicked = this.clicked.bind(this);

  }

  clicked (sortBy) {
    if(sortBy === 'star') {
      this.setState({
        sortByStar: !this.state.sortByStar,
        sortBy: false,
      })
    } else {
      this.setState({
        sortByStar: false,
        sortBy: !this.state.sortBy,
      })
    }

  }
  
  render () {
    return (
      <table>
        <tbody>
          <tr>
            <SortingByStars sortedByNumber={this.props.sortedByNumber} status={this.state.sortByStar} clicked={this.clicked}/>
            <SortingBy sortedByNumber={this.props.sortedByNumber} status={this.state.sortBy} clicked={this.clicked}/>
          </tr>
        </tbody>
      </table>
    );
    
  }
}

export default Sorting;
