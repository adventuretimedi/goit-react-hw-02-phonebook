import { Component } from 'react';

class Filter extends Component {
  handleChange = e => {
    const filter = e.currentTarget.value;
    this.props.onFilterChanged(filter);
  };

  render() {
    return (
      <label htmlFor="">
        <p>Find contacts by name</p>
        <input onChange={this.handleChange} type="text" name="filter" />
      </label>
    );
  }
}

export default Filter;
