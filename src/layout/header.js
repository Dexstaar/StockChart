import React, { Component } from "react";
import styled from "styled-components";
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';


class Header extends Component {
  render() {
    return (
      <PageHeader><h1>Stock Chart</h1></PageHeader>
    );
  }
}

const PageHeader = styled.div`
  border-bottom: 1px solid #eee;
  overflow: hidden;
  background-color: #41B3A3;
  padding: 10px 10px;
  color: white;
`;

export default Header;
