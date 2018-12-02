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
      <div className="component-emoji-results">
        {this.props.emojiData.map(emojiData => (
          <SearchResultsRow
            key={emojiData.title}
            symbol={emojiData.symbol}
            title={emojiData.title}
          />
        ))}
      </div>
    );
  }
}
SearchResults.propTypes = {
  emojiData: PropTypes.array
};
export default SearchResults;
