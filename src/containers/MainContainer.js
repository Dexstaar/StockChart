import React, { Component } from "react";
import { Link } from "react-router-dom";

let code;

class MsftContainer extends Component {


  render() {

    console.log(this.props);
    
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
