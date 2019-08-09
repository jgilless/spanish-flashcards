import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";
import styled from "@emotion/styled";

import Drawer from "./drawer";
import Button from "../base/button";

const StyledNavLink = styled.li({
  listStyle: "none"
});

const StyledNavHeader = styled.nav`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 100px 1fr;
  background-color: ${props => props.theme.colors.primaryDark};
  color: ${props => props.theme.colors.primaryText};
  align-items: center;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);

  a {
    color: ${props => props.theme.colors.primaryText};
    text-decoration: none;
    font-size: 2rem;
  }
`;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      hidden: true
    };

    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer() {
    const { open } = this.state;
    if (open) {
      this.setState({
        open: false
      });
      setTimeout(() => {
        this.setState({
          hidden: true
        });
      }, 225);
    } else {
      this.setState({
        open: true,
        hidden: false
      });
    }
  }

  render() {
    const { open, hidden } = this.state;
    const { routes } = this.props;

    const links = routes.map((route, i) => {
      return (
        <StyledNavLink key={i}>
          <Link to={route.path} onClick={this.toggleDrawer}>
            {route.name}
          </Link>
        </StyledNavLink>
      );
    });

    return (
      <Fragment>
        <StyledNavHeader>
          <Button
            tabIndex={0}
            type="button"
            design="ghost"
            label="Open Drawer"
            onClick={this.toggleDrawer}
          >
            <i className="material-icons">menu</i>
          </Button>
          <Link to="/">Spanish</Link>
        </StyledNavHeader>
        <Drawer open={open} toggleDrawer={this.toggleDrawer} hidden={hidden}>
          <ul className="drawer__nav-links">
            <StyledNavLink>
              <Link to="/" onClick={this.toggleDrawer}>
                Dashboard
              </Link>
            </StyledNavLink>
            {links}
          </ul>
        </Drawer>
      </Fragment>
    );
  }
}

Header.propTypes = {
  routes: PropTypes.array
};

Header.defaultProps = {
  routes: []
};

export default Header;
