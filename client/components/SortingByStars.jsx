import React from 'react';

class SortingByStars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      star: '',
    };
    this.dropdown = this.dropdown.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  dropdown(e) {
    this.setState({
      clicked: !this.state.clicked,
    });
  }

  clickHandler(e) {
    this.state.clicked = !this.state.clicked;
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

    if (!this.state.clicked) {
      return (
        <td className="sortByStar">
          <div className="sortStar-before" onClick={e => this.dropdown(e)}>
            {divVal[this.state.star] || `Star Rating`}
          </div>
        </td>
      );
    }
    return (
      <td className="sortByStar">
        <div className="sortStar-after" onClick={e => this.dropdown(e)}>
          Star Rating
        </div>
        <ul className="options" onClick={e => this.clickHandler(e)}>
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
