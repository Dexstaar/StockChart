import React, { Component } from "react";
import { Nav, NavIcon, NavText } from 'react-sidenav';

import { withRR4 } from 'react-sidenav';
import { BrowserRouter as Router } from 'react-router';

const SideNav = withRR4();

class Menu extends Component {
  render() {
    return (
      <div className={this.props.className} style={{background: '#2c3e50', color: '#FFF', width: 150}}> 
        <SideNav highlightColor='#FFF' highlightBgColor='#00bcd4' defaultSelected='sales'>       
            <Nav id='msft'>
                <NavText> MSFT </NavText>
            </Nav>
            <Nav id='aapl'>
                <NavText> AAPL </NavText>
            </Nav>
            <Nav id='intc'>
                <NavText> INTC </NavText>
            </Nav>
            <Nav id='nflx'>
                <NavText> NFLX </NavText>
            </Nav>
            <Nav id='orcl'>
                <NavText> ORCL </NavText>
            </Nav>
            <Nav id='cmcsa'>
                <NavText> CMCSA </NavText>
            </Nav>
            <Nav id='goog'>
                <NavText> GOOG </NavText>
            </Nav>
            <Nav id='luv'>
                <NavText> LUV </NavText>
            </Nav>
            <Nav id='hog'>
                <NavText> HOG </NavText>
            </Nav>
            <Nav id='googl'>
                <NavText> GOOGL </NavText>
            </Nav>
            <Nav id='amzn'>
                <NavText> AMZN </NavText>
            </Nav>
        </SideNav>
    </div>
    );
  }
}

export default Menu;