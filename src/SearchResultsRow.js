import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./SearchResultsRow.css";

class SearchResultsRow extends PureComponent {
  render() {
    return (
      <Card {...this.props} />
    );
  }
}

const Card = (cardInfo) => {
  if (cardInfo.logo.includes("namely")) {
    return <SpecialNamelyCard {...cardInfo}/>;
  }
  return <SimpleCard {...cardInfo} />;
};

const SimpleCard = (cardInfo) => {
  const logoUrl = require(`./logos/${cardInfo.logo}.png`);
  return (
    <div className="component-result-row slide-top">
      <div className="component-result-row-image">
        <img alt={cardInfo.title} src={logoUrl} />
      </div>
      <div className="title">{cardInfo.title}</div>
      <div className="snippet">{cardInfo.snippet}</div>
      <div className="info">⇨</div>
    </div>
  );
};

const SpecialNamelyCard = (cardInfo) => {
  const logoUrl = require(`./logos/${cardInfo.logo}.png`);
  return (
    <div className="component-result-row special-card slide-top">
      <div className="component-result-row-image">
        <img alt={cardInfo.title} src={logoUrl} />
      </div>
      <div className="namely-profile-image">
        <img src={require('./profile_avatar.png')} />
      </div>
      <div className="namely-details">
        <b>Name:</b> James Andrews
        <br /><b>Role:</b> Product manager, Sherlock
        <br /><b>Manager:</b> Someone else
      </div>
      <span className="info">Chat on Slack ⇨</span>

    </div>
  );
};

SearchResultsRow.propTypes = {
  title: PropTypes.string,
  symbol: PropTypes.string
};
export default SearchResultsRow;
