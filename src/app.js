import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { Route, Switch } from 'react-router-dom';

import Header from "./layout/header";
import Footer from "./layout/footer";
import MainContainer from "./containers/MainContainer";

export default class App extends Component {

  render() {
    return (
      <div>
        <Header />
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

const StyledButtonExtendsMUI = styled(Button)`
  && {
    background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
    border-radius: 3px;
    border: 0;
    color: white;
    height: 48px;
    padding: 0 30px;
    box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
  }
`;
