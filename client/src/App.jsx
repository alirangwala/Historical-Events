import React from 'react';
import SearchBar from './components/SearchBar.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
      searchOutput: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)

  }

  handleChange(event) {
    this.setState({
      searchInput: event.target.value
    })
  }

  handleClick(event) {
    event.preventDefault;
    let searchTerm = this.state.searchInput;
    console.log(searchTerm)
  }


  render() {
    return (
      <div>
        <SearchBar
          searchInput={this.state.searchInput}
          handleChange={this.handleChange}
          handleClick={this.handleClick}
        />
      </div >
    );
  }
}

export default App;