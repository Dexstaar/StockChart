import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import styled from "styled-components";

import DailyChartContainer from "../containers/DailyChartContainer";

class MainContainer extends Component {

  render() {
    return (
      <ContainerPlaceHolder>
        <DailyChartContainer stockCode={this.props.match.params.code} />
      </ContainerPlaceHolder>
    );
  }
}

const ContainerPlaceHolder = styled.div`
  margin-left: 200px;
`;

export default MainContainer;
