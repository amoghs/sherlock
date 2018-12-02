import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Clipboard from "clipboard";

import SearchResultsRow from "./SearchResultsRow";
import "./SearchResults.css";

class SearchResults extends PureComponent {
  componentDidMount() {
    this.clipboard = new Clipboard(".copy-to-clipboard");
  }

  componentWillUnmount() {
    this.clipboard.destroy();
  }

  render() {
    return (
      <div className="component-results">
        {this.props.searchResults.map(content => (
          <SearchResultsRow
            key={content.title}
            logo={content.logo}
            title={content.title}
            snippet={content.snippet}
          />
        ))}
      </div>
    );
  }
}
SearchResults.propTypes = {
  searchResults: PropTypes.array
};
export default SearchResults;
