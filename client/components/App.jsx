import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],

    };
    this.bringData = this.bringData.bind(this);
  }

  componentDidMount() {
    this.bringData();
  }


  bringData() {
    axios.get('/82/init')
      .then((res) => {
        this.setState({
          reviews: res.data,
        });
      })
      .catch((err) => {
        console.log(err, 'error from server');
      });
  }

  render() {
    return (
      <div>
        <div className="reviewSummary">
          ReviewSummary will be here
        </div>
        <div className="sorting" >
          Review sorting parts will be here
        </div>
        <div className="reviews">
          <ReviewList reviews={this.state.reviews} />
        </div>
      </div>
    );
  }
}
export default App;

ReactDOM.render(<App />, document.getElementById('app'));
