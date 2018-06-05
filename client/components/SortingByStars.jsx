import React from 'react';

class SortingByStars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
    this.dropdown = this.dropdown.bind(this);
  }

  dropdown(e) {
    this.setState({
      clicked: !this.state.clicked,
    });
  }

  render() {
    if (!this.state.clicked) {
      return (
        <td className="sortByStar">
          <div onClick={e => this.dropdown(e)}>
            Star Rating
          </div>
        </td>
      );
    }
    return (
      <td className="sortByStar">
        <div onClick={e => this.dropdown(e)}>
          Star Rating
        </div>
        <ul className="options" onClick={e => this.props.sortedByNumber(e.target.value)}>
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
