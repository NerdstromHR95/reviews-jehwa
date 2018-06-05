import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import Sorting from './Sorting.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      filtered: [],

    };
    this.bringData = this.bringData.bind(this);
    this.sortedByNumber = this.sortedByNumber.bind(this);
  }

  componentDidMount() {
    this.bringData();
  }


  bringData() {
    axios.get('/82/init')
      .then((res) => {
        this.setState({
          reviews: res.data,
          filtered: res.data,
        });
      })
      .catch((err) => {
        console.log(err, 'error from server');
      });
  }

  sortedByNumber(starNum) {

    let filtered;
    if (starNum === 0) {
      filtered = this.state.reviews;
    }
    if (starNum >= 1 && starNum <= 5) {
      filtered = this.state.reviews.filter(review => review.stars === starNum);
    }
    if (starNum === 10) {
      filtered = this.state.filtered.sort((a, b) => b.stars - a.stars);
    }
    if (starNum === 11) {
      filtered = this.state.filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    this.setState({
      filtered,
    })
  }

  render() {
    return (
      <div className="nerdstromReviewPage">
        <div className="reviewSummary">
          ReviewSummary will be here
        </div>
        <div className="sorting" >
          <Sorting sortedByNumber={this.sortedByNumber} />
        </div>
        <div className="reviews">
          <ReviewList reviews={this.state.filtered} />
        </div>
      </div>
    );
  }
}
export default App;

ReactDOM.render(<App />, document.getElementById('app'));
