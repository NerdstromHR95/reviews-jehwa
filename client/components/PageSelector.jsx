import React from 'react';
import PageList from './PageList.jsx';

class PageSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 2,
    };
    this.pageList = this.pageList.bind(this);
  }

  pageList() {
    const pageList = [];
    if (this.props.totalPage < 6) {
      for (let i = 1; i <= this.props.totalPage; i ++) {
        pageList.push(i);
      }
    } else {
      if (this.state.currentPage < 4) {
        pageList.push(1,2,3,4,'...',this.props.totalPage);
      }
      if (this.state.currentPage > this.props.totalPage-3) {
        pageList.push(1, '...', this.props.totalPage-3, this.props.totalPage-2, this.props.totalPage-1, this.props.totalPage);
      }
      if ((this.state.currentPage >=4) && (this.state.currentPage <= this.props.totalPage-3)) {
        pageList.push(1, '...', this.state.currentPage-1, this.state.currentPage, this.state.currentPage+1, '...', this.props.totalPage);
      }
    }

    return pageList;
  }


  render() {
    if (this.state.currentPage === 1) {
      return (
        <div className="pageSelectorBody">
          <div style={{visibility: 'hidden'}}>
            <svg height="24" width="13">
              <path d="M 1 12 l 11 11 m 0 -22 L 1 12" />
            </svg>
          </div>         
          <div className="selectNum">
            {this.pageList().map((num, index) => <PageList page={num} key={index}/>)}
          </div>
          <div>
            <svg height="24" width="13">
              <path d="M 12 12 L 1 1 m 0 22 l 11 -11" />
            </svg>
          </div>
        </div>
      )
    }
    if(this.state.currentPage === this.props.totalPage) {
      return (
        <div className="pageSelectorBody">
          <div>
            <svg height="24" width="13">
              <path d="M 1 12 l 11 11 m 0 -22 L 1 12" />
            </svg>
          </div>         
          <div className="selectNum">
            {this.pageList().map((num, index) => <PageList page={num} key={index}/>)}
          </div>
          <div style={{visibility: 'hidden'}}>
            <svg height="24" width="13">
              <path d="M 12 12 L 1 1 m 0 22 l 11 -11" />
            </svg>
          </div>
        </div>
      )
    }
    return (
      <div className="pageSelectorBody">
        <div className="arrow">
          <svg height="24" width="13">
            <path d="M 1 12 l 11 11 m 0 -22 L 1 12" />
          </svg>
          <span>
            PREVIOUS
          </span>
        </div>         
        <div className="selectNum">
          {this.pageList().map((num, index) => <PageList page={num} key={index}/>)}
        </div>
        <div className="arrow">
          <span>
            NEXT
          </span>
          <span>
            <svg height="24" width="13">
              <path d="M 12 12 L 1 1 m 0 22 l 11 -11" />
            </svg>
          </span>
        </div>
      </div>
    )

  }

}

export default PageSelector;
