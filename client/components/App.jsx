import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.bringData = this.bringData.bind(this);
  }

  componentDidMount() {
    this.bringData();
  }



  bringData() {
    axios.get('/init')
      .then((res) => {
        console.log(res, 'response from server');
      })
      .catch((err) => {
        console.log(err, 'error from server');
      });
  }

  render() {
    return (
      <div>
        <div className="reviewSummary" />
        <div className="sorting" />
        <div className="reviews">
        Hi
        </div>
      </div>
    );
  }
}
export default App;

ReactDOM.render(<App />, document.getElementById('app'));
