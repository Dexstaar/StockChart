import React, { Component } from "react";
import { Link } from "react-router-dom";

class MsftContainer extends Component {

  render() {
    return (
      <div>
        <div>Main Container : {this.props.match.params.code}</div>
        <div>
          <Link to="/msft">MSFT</Link>
        </div>
      </div>
    );
  }
}

export default MsftContainer;
