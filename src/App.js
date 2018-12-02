import React, { PureComponent } from "react";
import Header from "./Header";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";
import searchData from "./searchData";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      searchResultSet: searchData("empty", 20)
    };
  }

  handleSearchChange = event => {
    this.setState({
      searchResultSet: searchData(event.target.value, 20)
    });
  };

  render() {
    return (
      <div>
        <Header />
        <SearchInput textChange={this.handleSearchChange} />
        <SearchResults searchResults={this.state.searchResultSet} />
      </div>
    );
  }
}
export default App;
