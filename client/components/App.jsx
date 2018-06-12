import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import Sorting from './Sorting.jsx';
import ReviewSummary from './ReviewSummary.jsx';
import PageSelector from './PageSelector.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      filtered: [],
      eachPage: [],
      filteredByStar: 0,
      sortedByTime: false,
      totalReviews: '',
      currentPage: 1,
      itemNo: null,
    };
    this.bringData = this.bringData.bind(this);
    this.sortedByNumber = this.sortedByNumber.bind(this);
    this.changePage = this.changePage.bind(this);
    this.movePage = this.movePage.bind(this);
  }

  componentDidMount() {
    this.bringData();
  }

  bringData() {
    const itemNumber = window.location.pathname.split('/')[1];
    axios.get(`/${itemNumber}/reviews/init`)
      .then((res) => {
        const validStars = res.data.filter(review => review.stars > 0);
        const aveStar = validStars.reduce((acc, val) => (acc + val.stars), 0) / validStars.length;
        const validFitRatings = res.data.filter(review => review.fitRating > 0);
        const aveFitRating = Math.round(validFitRatings.reduce((acc, val) => (acc + val.fitRating), 0) / validFitRatings.length);
        const validWidthRatings = res.data.filter(review => review.widthRating > 0);
        const aveWidthRating = Math.round(validWidthRatings.reduce((acc, val) => (acc + val.widthRating), 0) / validWidthRatings.length);

        this.setState({
          reviews: res.data.slice(),
          filtered: res.data.slice(),
          eachPage: res.data.slice(0, 5),
          aveStar,
          aveFitRating,
          aveWidthRating,
          totalReviews: res.data.length,
          itemNo: itemNumber,
        });
      })
      .catch((err) => {
        console.log(err, 'error from server');
      });
  }

  sortedByNumber(starNum) {
    let filtered;
    if(starNum === 0) {
      if(!this.state.sortedByTime) {
        filtered = this.state.reviews.slice();
      } else {
        filtered = this.state.reviews.sort((a,b) => new Date(b.date) - new Date(a.date));
      }
      this.setState({
        filtered: filtered,
        eachPage: filtered.slice(0,5),
        currentPage: 1,
        filteredByStar: starNum,
      })
    } 
    if(starNum > 0 && starNum < 6) {
      this.setState({
        filteredByStar: starNum,
      }, () => {
        axios.get(`/${this.state.itemNo}/reviews/filter/${this.state.filteredByStar}/${this.state.sortedByTime}`)
          .then((res) => {
            this.setState({
              filtered: res.data,
              eachPage: res.data.slice(0, 5),
              currentPage: 1,
            });
          });
      })
    }
    if(starNum === 10) {
      if(this.state.filteredByStar === 0) {
        filtered = this.state.reviews.slice().sort((a,b) => b.stars - a.stars);
        this.setState({
          filtered: filtered,
          eachPage: filtered.slice(0,5),
          currentPage: 1,
          sortedByTime: false,
        })
      } else {
        this.setState({
          sortedByTime: false,
        })
      }
    }
    if(starNum === 11) {
      if(this.state.filteredByStar === 0) {
        filtered = this.state.reviews.slice().sort((a,b) => new Date(b.date) - new Date(a.date));
        this.setState({
          filtered: filtered,
          eachPage: filtered.slice(0,5),
          currentPage: 1,
          sortedByTime: true,
        })
      } else {
        this.setState({
          sortedByTime: true,
        }, () => {
          axios.get(`/${this.state.itemNo}/reviews/filter/${this.state.filteredByStar}/${this.state.sortedByTime}`)
            .then((res) => {
              this.setState({
                filtered: res.data,
                eachPage: res.data.slice(0, 5),
                currentPage: 1,
              });
            });
        })
      }
    } 
  }

  changePage(pageNum) {
    const pageView = this.state.filtered.slice((5 * (pageNum - 1)), 5 * pageNum);
    this.setState({
      eachPage: pageView,
      currentPage: pageNum,
    });
  }

  movePage(direction) {
    let newPage;
    if (direction === 'previous') {
      newPage = this.state.currentPage - 1;
    } else {
      newPage = this.state.currentPage + 1;
    }
    this.setState({
      currentPage: newPage,
      eachPage: this.state.filtered.slice((5 * (newPage - 1)), 5 * newPage),
    });
  }

  render() {
    return (
      <div className="nerdstromReviewPage">
        <div className="reviewSummaryMain">
          <ReviewSummary
            aveStar={this.state.aveStar}
            aveFitRating={this.state.aveFitRating}
            aveWidthRating={this.state.aveWidthRating}
            totalReviews={this.state.totalReviews}
          />
        </div>
        <div className="sorting" >
          <Sorting sortedByNumber={this.sortedByNumber} />
        </div>
        <div className="reviews">
          <ReviewList reviews={this.state.eachPage} />
        </div>
        <div className="pageSelector">
          <PageSelector
            currentPage={this.state.currentPage}
            totalPage={Math.ceil(this.state.filtered.length / 5)}
            changePage={this.changePage}
            movePage={this.movePage}
          />
        </div>
      </div>
    );
  }
}
export default App;
