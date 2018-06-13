import React from 'react';
import PageList from './PageList.jsx';
import styles from '../main.css'


class PageSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // currentPage: 1,
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
      if (this.props.currentPage < 4) {
        pageList.push(1, 2, 3, 4, '...', this.props.totalPage);
      }
      if (this.props.currentPage > this.props.totalPage - 3) {
        pageList.push(1, '...', this.props.totalPage - 3, this.props.totalPage - 2, this.props.totalPage - 1, this.props.totalPage);
      }
      if ((this.props.currentPage >= 4) && (this.props.currentPage <= this.props.totalPage - 3)) {
        pageList.push(1, '...', this.props.currentPage - 1, this.props.currentPage, this.props.currentPage + 1, '...', this.props.totalPage);
      }
    }

    return pageList;
  }

  pageSelect(num) {
    this.props.changePage(Number(num));
  }


  render() {
    const visibility = {
      1: 'hidden',
    };
    const nextVisibility = {
      [this.props.totalPage || 1]: 'hidden',
    };
    return (
      <div className={styles.pageSelectorBody}>
        <div
          className={styles.previous}
          style={{ visibility: visibility[this.props.currentPage] || null }}
          onClick={() => this.props.movePage('previous')}
        >
          <svg height="24" width="13">
            <path className={styles.arrow} d="M 1 12 l 11 11 m 0 -22 L 1 12" />
          </svg>
          <span>
            PREVIOUS
          </span>
        </div>
        <div className={styles.selectNum}>
          {this.pageList().map((num, index) => <PageList page={num} key={index} select={this.pageSelect} currentPage={this.props.currentPage} />)}
        </div>
        <div
          className={styles.next}
          style={{ visibility: nextVisibility[this.props.currentPage] || null }}
          onClick={() => this.props.movePage()}
        >
          <span>
            NEXT
          </span>
          <svg height="24" width="13">
            <path className={styles.arrow} d="M 12 12 L 1 1 m 0 22 l 11 -11" />
          </svg>
        </div>
      </div>
    );
  }
}

export default PageSelector;
