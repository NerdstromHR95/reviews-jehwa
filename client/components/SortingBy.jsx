import React from 'react';

class SortingBy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
    this.dropDown = this.dropDown.bind(this);
  }

  dropDown(e) {
    this.setState({
      clicked: !this.state.clicked,
    });
  }

  render() {
    if (!this.state.clicked) {
      return (
        <td className="sortBy">
          <div onClick={e => this.dropDown(e)}>
            Sort Reviews
          </div>
        </td>
      );
    }
    return (
      <td className="sortBy">
        <div onClick={e => this.dropDown(e)}>
          Sort Reviews
        </div>
        <ul className="optionForSortBy" onClick={e => {
          this.state.clicked = !this.state.clicked;
          this.props.sortedByNumber(e.target.value)}}>
          <li value="10"> Star Rating </li>
          <li value="11"> Submission Time</li>
        </ul>
      </td>
    );
  }
}

export default SortingBy;
