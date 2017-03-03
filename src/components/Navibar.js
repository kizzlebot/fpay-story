import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import logo from './assets/FlexShopper-logo.svg';

require('bootstrap-loader');


export default class Navibar extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {};
  }

  componentWillMount() {
    this.setState({
      text: 'hi there world',
    });
  }

  render() {
    const logoWrapperStyle = {
      height: '100%',
      textAlign: 'center',
    };
    const imgStyle = {
      height: '100%',
      verticalAlign: 'baseline',
    };
    const containerStyle = {
      height: '45px',
      padding: '8px 0',
    };
    const navbarStyle = {
      height: '45px',
      minHeight: '25px',
      backgroundColor: '#2279ed',
      borderRadius: '0',
    };
    return (
      <div>
        <Navbar collapseOnSelect style={navbarStyle}>
          <div className="container" style={containerStyle}>
            <div className="logo-wrapper" style={logoWrapperStyle}>
              <a href="/">
                <img className={'fs-logo'} alt={'fslogo'} src={logo} style={imgStyle} />
              </a>
            </div>
          </div>
        </Navbar>
      </div>
    );
  }
}

Navibar.propTypes = {
  children: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
  style: React.PropTypes.object,
};

// export default Navibar;
