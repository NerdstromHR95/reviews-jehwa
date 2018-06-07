import React from 'react';

class SortingBy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortVal: '',
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    this.props.clicked();
    this.setState({
      sortVal: e.target.value,
    }, () => this.props.sortedByNumber(this.state.sortVal));
  }

  render() {
    const sortVal = {
      10: 'Star Rating',
      11: 'Submission Time',
    };
    if (!this.props.status) {
      return (
        <td className="sortByMain">
          <div className="sortBy" onClick={() => this.props.clicked()}>
            { sortVal[this.state.sortVal] || 'Sort Reviews'}
            <span className="smallArrow">
              <svg height="7" width="12">
                <path d="M 6.002 6 L 1 1 m 5.002 5 L 11 1.002" />
              </svg>
            </span>
          </div>
        </td>
      );
    }
    return (
      <td className="sortByMain">
        <div className="sortBy" onClick={() => this.props.clicked()}>
          Sort Reviews
          <span className="smallArrow">
            <svg height="7" width="12">
              <path d="M 5.998 1 L 11 6 M 5.998 1 L 1 5.998" />
            </svg>
          </span>
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
