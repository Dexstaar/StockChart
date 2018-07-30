import React, { Component } from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";

import Header from "./layout/header";
import Footer from "./layout/footer";
import Menu from "./layout/menu";
import MainContainer from "./containers";

export default class App extends Component {
  render() {
    return (
      <MainPlaceHolder>
        <Header />
        <StyledMenu/>
        <Switch>
          <Route exact path="/" component={MainContainer} />
          <Route path="/:code" component={MainContainer} />
        </Switch>
        <StyledFooter />
      </MainPlaceHolder>
    );
  }
}

const MainPlaceHolder = styled.div`
  min-width: 1300px;
`;

const MenuPlaceHolder = styled.div`
  float: left;
`;

const StyledMenu = styled(Menu)`
  float: left;
`;

const StyledFooter = styled(Footer)`
  clear: both;
`;


