import React from 'react';
import PageList from './PageList.jsx';

class PageSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 2,
    };
    this.pageList = this.pageList.bind(this);
    this.pageSelect = this.pageSelect.bind(this);
  }

  pageList() {
    const pageList = [];
    if (this.props.totalPage < 6) {
      for (let i = 1; i <= this.props.totalPage; i++) {
        pageList.push(i);
      }
    } else {
      if (this.state.currentPage < 4) {
        pageList.push(1, 2, 3, 4, '...', this.props.totalPage);
      }
      if (this.state.currentPage > this.props.totalPage - 3) {
        pageList.push(1, '...', this.props.totalPage - 3, this.props.totalPage - 2, this.props.totalPage - 1, this.props.totalPage);
      }
      if ((this.state.currentPage >= 4) && (this.state.currentPage <= this.props.totalPage - 3)) {
        pageList.push(1, '...', this.state.currentPage - 1, this.state.currentPage, this.state.currentPage + 1, '...', this.props.totalPage);
      }
    }

    return pageList;
  }

  pageSelect(num) {
    this.setState({
      currentPage: Number(num),
    });
  }


  render() {
    const visibility = {
      1: 'hidden',
    };
    const nextVisibility = {
      [this.props.totalPage]: 'hidden',
    };
    return (
      <div className="pageSelectorBody">
        <div style={{ visibility: visibility[this.state.currentPage] || null }}>
          <svg height="24" width="13">
            <path d="M 1 12 l 11 11 m 0 -22 L 1 12" />
          </svg>
          <span>
            PREVIOUS
          </span>
        </div>
        <div className="selectNum">
          {this.pageList().map((num, index) => <PageList page={num} key={index} select={this.pageSelect} />)}
        </div>
        <div style={{ visibility: nextVisibility[this.state.currentPage] || null }}>
          <span>
            NEXT
          </span>
          <svg height="24" width="13">
            <path d="M 12 12 L 1 1 m 0 22 l 11 -11" />
          </svg>
        </div>
      </div>
    );
  }
}

export default PageSelector;
