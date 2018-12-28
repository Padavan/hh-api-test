import React from 'react';

import CardWrapper from '../containers/CardWrapper';
import Search from '../containers/Search';
import Filter from '../containers/Filter';

const url = 'https://api.hh.ru/vacancies';

class Main extends React.Component {
  state = {
    data: {
      items: []
    },
    page: 1
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = (params) => {
    const payload = params || {};
    let requestUrl = `${url}?page=${this.state.page}`;
    if (payload.area) {
      requestUrl += `&area=${payload.area}`;
    }
    if (payload.salary) {
      requestUrl += `&salary=${payload.salary}`;
    }
    fetch(requestUrl)
      .then(res => res.json())
      .then(data => this.setState({ data }))
      .catch(err => console.error(err));
  }

  nextPage() {
    this.setState(state => ({ page: state.page + 1 }));
    this.fetchData();
  }

  prevPage() {
    if (this.state.page === 1) {
      return;
    }
    this.setState(state => ({ page: state.page - 1 }));
    this.fetchData();
  }

  render() {
    return (
      <div>
        <Search />
        <Filter fetchData={e => this.fetchData(e)} />
        <CardWrapper data={this.state.data} />
        <div className='page--buttons'>
          <button onClick={() => this.nextPage()}>
            Next Page
          </button>
          <button disabled={this.state.page === 1} onClick={() => this.prevPage()}>
            Prev Page
          </button>
        </div>
      </div>
    );
  }
}

export default Main;
