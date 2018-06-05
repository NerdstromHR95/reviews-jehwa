import React from 'react';

class SortingBy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      sortVal: '',
    };
    this.dropDown = this.dropDown.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  dropDown(e) {
    this.setState({
      clicked: !this.state.clicked,
    });
  }
  clickHandler(e) {
    this.setState({
      clicked: !this.state.clicked,
      sortVal: e.target.value,
    }, () => this.props.sortedByNumber(this.state.sortVal));
  }

  render() {
    const sortVal = {
      10: 'Star Rating',
      11: 'Submission Time',
    };
    if (!this.state.clicked) {
      return (
        <td >
          <div className="sortBy" onClick={e => this.dropDown(e)}>
            { sortVal[this.state.sortVal] || 'Sort Reviews'}
          </div>
        </td>
      );
    }
    return (
      <td>
        <div className="sortBy" onClick={e => this.dropDown(e)}>
          Sort Reviews
        </div>
        <ul className="optionForSortBy" onClick={e => this.clickHandler(e)}>
          <li value="10"> Star Rating </li>
          <li value="11"> Submission Time</li>
        </ul>
      </td>
    );
  }
}

export default SortingBy;
