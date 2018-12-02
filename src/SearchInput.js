import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import "./SearchInput.css";

class SearchInput extends PureComponent {
  handleChange = event => {
    this.props.textChange(event);
  };


  enterPressed = event => {
    var code = event.keyCode || event.which;
    if(code === 13) { //13 is the enter keycode
        this.handleChange(event);
    } 
  };

  render() {
    return (
      <div className="component-search-input">
        <div>
          <input placeholder="Try project alpha" onKeyUp={this.enterPressed.bind(this)} />
        </div>
      </div>
    );
  }
}

SearchInput.propTypes = {
  textChange: PropTypes.func
};
export default SearchInput;
