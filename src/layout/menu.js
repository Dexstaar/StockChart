import React, { Component } from "react";
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
// import SvgIcon from 'react-icons-kit';

// import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
// import { ic_business } from 'react-icons-kit/md/ic_business';

class Menu extends Component {
  render() {
    return (
      <div className={this.props.className} style={{background: '#2c3e50', color: '#FFF', width: 150}}> 
        <SideNav highlightColor='#FFF' highlightBgColor='#00bcd4' defaultSelected='sales'>       
            <Nav id='aaa'>
                <NavText> aaa </NavText>
            </Nav>
            <Nav id='bbb'>
                <NavText> bbb </NavText>
            </Nav>
            <Nav id='ccc'>
                <NavText> ccc </NavText>
            </Nav>
            <Nav id='ddd'>
                <NavText> ddd </NavText>
            </Nav>
            <Nav id='eee'>
                <NavText> eee </NavText>
            </Nav>
        </SideNav>
    </div>
    );
  }
}

export default Menu;