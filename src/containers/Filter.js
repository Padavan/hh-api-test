import React from 'react';

import { getObjects } from '../helpers';

class Filter extends React.Component {
  state = {
    city: '',
    salary: 0,
    // skills: [],
    areas: null,
    error: false
  }

  componentDidMount() {
    fetch('https://api.hh.ru/areas')
      .then(res => res.json())
      .then(areas => this.setState({ areas }))
      .catch(err => console.error(err));
  }

  showError() {
    this.setState({ error: true, city: '' });
  }

  applyFilter() {
    const areaNames = getObjects(this.state.areas, 'name', this.state.city);
    if (areaNames.length === 0) {
      this.showError();
      return;
    }
    const areaId = areaNames[0].id;
    this.props.fetchData({ area: areaId, salary: this.state.salary });
  }

  render() {
    return (
      <section className='filter'>
        <h2>
          Filter
        </h2>
        <div className='filter--option'>
          <span>
            City
          </span>
          <input
            type='text'
            className={this.state.error ? 'invalid' : ''}
            placeholder={this.state.error ? 'City not found' : 'City'}
            value={this.state.city}
            onChange={e => this.setState({ city: e.target.value, error: false })}
          />
        </div>
        <div className='filter--option'>
          <span>
            Salary
          </span>
          <input
            type='number'
            value={this.state.salary}
            onChange={e => this.setState({ salary: e.target.value })}
          />
        </div>
        <br />
        <button onClick={() => this.applyFilter()} type='button'>
          Apply Filter
        </button>
        <hr />
      </section>
    );
  }
}

export default Filter;
