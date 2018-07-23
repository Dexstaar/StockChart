import React, { Component } from "react";
import styled from "styled-components";

class Footer extends Component {
  render() {
  return (
    <PageFooter className={this.props.className}>
      Footer
    </PageFooter>);
  }
}

const PageFooter = styled.div`
  border-bottom: 1px solid #00bcd4;
  overflow: hidden;
  background-color: #000000;
  padding: 10px 10px;
  color: white;
`;

export default Footer;