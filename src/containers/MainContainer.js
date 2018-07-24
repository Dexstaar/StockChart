import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';


class MsftContainer extends Component {

  render() {
    return (
      <div>
        <div>Main Container : {this.props.match.params.code}</div>
        <div>
          <Link to="/msft">MSFT</Link><Button color="danger">Danger!</Button>
        </div>
      </div>
    );
  }
}

export default MsftContainer;
