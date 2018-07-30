import React, { Component } from "react";
import { Link, browserHistory } from "react-router-dom";
import { Button } from "reactstrap";
import styled from "styled-components";

import DailyChartContainer from "../containers/DailyChartContainer";

class MainContainer extends Component {

  componentWillMount() {
    if(!this.props.match.params.code) this.props.history.push('/msft');
  }

  render() {
    return (
      <ContainerPlaceHolder>
        <DailyChartContainer stockCode={this.props.match.params.code} />
      </ContainerPlaceHolder>
    );
  }
}

const ContainerPlaceHolder = styled.div`
  margin-top: 20px;
  margin-left: 200px;
  margin-bottom: 20px;
`;

export default MainContainer;
