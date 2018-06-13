import React from 'react';
import styles from '../main.css'


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
        <td className={styles.sortByMain}>
          <div className={styles.sortBy} onClick={() => this.props.clicked()}>
            { sortVal[this.state.sortVal] || 'Sort Reviews'}
            <span className={styles.smallArrow}>
              <svg height="7" width="12">
                <path className={styles.arrow} d="M 6.002 6 L 1 1 m 5.002 5 L 11 1.002" />
              </svg>
            </span>
          </div>
        </td>
      );
    }
    return (
      <td className={styles.sortByMain}>
        <div className={styles.sortBy} onClick={() => this.props.clicked()}>
          Sort Reviews
          <span className={styles.smallArrow}>
            <svg height="7" width="12">
              <path className={styles.arrow} d="M 5.998 1 L 11 6 M 5.998 1 L 1 5.998" />
            </svg>
          </span>
        </div>
        <ul className={styles.optionForSortBy} onClick={e => this.clickHandler(e)}>
          <li className={styles.list} value="10"> Star Rating </li>
          <li className={styles.list} value="11"> Submission Time</li>
        </ul>
      </td>
    );
  }
}

export default SortingBy;
