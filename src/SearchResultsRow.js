import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./SearchResultsRow.css";

class SearchResultsRow extends PureComponent {
  render() {
    // const codePointHex = this.props.symbol.codePointAt(0).toString(16);
    // const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
    const logoUrl = require(`./logos/${this.props.logo}.png`);
    console.log(logoUrl);
    return (
      <div className="component-result-row slide-top">
        <div className="component-result-row-image">
          <img alt={this.props.title} src={logoUrl} />
        </div>
        <div className="title">{this.props.title}</div>
        <div className="snippet">{this.props.snippet}</div>
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
