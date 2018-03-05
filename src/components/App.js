import React from 'react';
import FruitBasket from './FruitBasket';
import Filter from './Filter'
import FilteredFruitList from './FilteredFruitList'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filters: [],
      fruit: [],
      currentFilter: null
    }
  }

  componentDidMount() {
    this.fetchFilters();
    this.fetchFruit();
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  fetchFruit = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  }

  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }

  render() {
    return (
      <FruitBasket
        fruit={this.state.fruit}
        filters={this.state.filters}
        currentFilter={this.state.currentFilter}
        onUpdateFilter={this.handleFilterChange}

      />
    )
  }

}

export default App;
