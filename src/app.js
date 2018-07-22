import React, { Component } from "react";
import styled from "styled-components";
import { Route, Switch } from 'react-router-dom';

import Header from "./layout/header";
import Footer from "./layout/footer";
import Menu from "./layout/menu";
import MainContainer from "./containers/MainContainer";

export default class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Menu />
          <Switch>
            <Route exact path='/' component={MainContainer} />
            <Route path='/:code' component={MainContainer} />
          </Switch>
        <Footer />
      </div>
    );

    // return (
    //   <div>
    //     Stock Chart !!
    //     <Button variant="contained" color="primary">
    //       {" "}
    //       Material UI Button
    //     </Button>
    //     <StyledButton>Styled Com Button</StyledButton>
    //     <StyledButtonExtendsMUI>Styled Button Based MUI</StyledButtonExtendsMUI>
    //   </div>
    // );
  }
}

const StyledButton = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;
`;


