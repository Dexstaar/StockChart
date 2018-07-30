import React, { Component } from "react";
import styled from "styled-components";
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';


class Header extends Component {
  render() {
    return (
      <PageHeader><h1>Daily OHLC Chart</h1></PageHeader>
      // <PageHeader><h1>a</h1></PageHeader>
    );
  }
}

const PageHeader = styled.div`
  border-bottom: 1px solid #00bcd4;
  overflow: hidden;
  background-color: #2c3e50;
  padding: 10px 10px;
  color: white;
`;

export default Header;
