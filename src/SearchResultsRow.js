import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./SearchResultsRow.css";

class SearchResultsRow extends PureComponent {
  render() {
    // const codePointHex = this.props.symbol.codePointAt(0).toString(16);
    // const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
    const src = require('./slack.png');
    return (
      <div className="component-result-row">
        <img alt={this.props.title} src={src} />
        <span className="title">{this.props.title}</span>
        <span className="info">Open content</span>
      </div>
    );
  }
}
SearchResultsRow.propTypes = {
  title: PropTypes.string,
  symbol: PropTypes.string
};
export default SearchResultsRow;
