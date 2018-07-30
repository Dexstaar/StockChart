import React, { Component } from "react";
import styled from "styled-components";

class Footer extends Component {
  render() {
  return (
    <PageFooter className={this.props.className}>
      Copyright © Jeonghoon Kim
    </PageFooter>);
  }
}

const PageFooter = styled.div`
  border-bottom: 1px solid #00bcd4;
  overflow: hidden;
  background-color: #000000;
  padding: 10px 10px;
  color: white;
  text-align: center;
`;

export default Footer;