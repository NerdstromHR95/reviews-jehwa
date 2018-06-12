import React from 'react';
import styles from '../main.css'


class SortingByStars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      star: '',
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    this.props.clicked('star');
    this.setState({
      star: e.target.value
    }, () => this.props.sortedByNumber(this.state.star))
  } 

  render() {
    let divVal={
      0: "All stars",
      1: "1 star",
      2: "2 star",
      3: "3 star",
      4: "4 star",
      5: "5 star"
    }

    if (!this.props.status) {
      return (
        <td className={styles.sortByStar}>
          <div className={styles.sortStarBefore} onClick={e => this.props.clicked('star')}>
            {divVal[this.state.star] || `Star Rating`}
            <span className={styles.smallArrow}>
              <svg height="7" width="12">
                <path d="M 6.002 6 L 1 1 m 5.002 5 L 11 1.002" />
              </svg>
            </span>
          </div>
        </td>
      );
    }
    return (
      <td className={styles.sortByStar}>
        <div className={styles.sortStarAfter} onClick={e => this.props.clicked('star')}>
          Star Rating
          <span className={styles.smallArrow}>
            <svg height="7" width="12">
              <path d="M 5.998 1 L 11 6 M 5.998 1 L 1 5.998" />
            </svg>
          </span>          
        </div>
        <ul className={styles.options} onClick={e => this.clickHandler(e)}>
          <li value="0"> All stars</li>
          <li value="1"> 1 star </li>
          <li value="2"> 2 star </li>
          <li value="3"> 3 star </li>
          <li value="4"> 4 star </li>
          <li value="5"> 5 star </li>
        </ul>
      </td>
    );
  }
}


export default SortingByStars;
