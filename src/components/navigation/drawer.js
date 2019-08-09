import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import Overlay from "./overlay";
import Button from "../base/button";

const StyledDrawerContainer = styled.div(
  {
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  props => ({
    zIndex: props.theme.zIndex.abovePage
  })
);

const StyledDrawer = styled.nav(
  {
    transform: "translateX(-300px)",
    transition: "transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms",
    top: 0,
    display: "flex",
    outline: "none",
    position: "fixed",
    overflowY: "auto",
    flexDirection: "column",
    width: "300px",
    height: "100%",
    backgroundColor: "#ffffff"
  },
  props => ({
    zIndex: props.theme.zIndex.abovePage
  })
);

class Drawer extends Component {
  render() {
    const { open, toggleDrawer, hidden, children } = this.props;
    const drawerContainerStyles = {
      visibility: hidden ? "hidden" : "visible"
    };
    const drawerStyles = {
      transform: open ? "translateX(0px)" : "translateX(-300px)"
    };
    return (
      <StyledDrawerContainer style={drawerContainerStyles}>
        <StyledDrawer style={drawerStyles}>
          <div className="drawer__header">
            <Button
              onClick={toggleDrawer}
              tabIndex={0}
              type="button"
              design="ghost"
            >
              <i className="material-icons">close</i>
            </Button>
          </div>
          {children}
        </StyledDrawer>
        <Overlay open={open} onClick={toggleDrawer} />
      </StyledDrawerContainer>
    );
  }
}

Drawer.propTypes = {
  open: PropTypes.bool.isRequired,
  hidden: PropTypes.bool,
  toggleDrawer: PropTypes.func.isRequired,
  children: PropTypes.element
};

export default Drawer;
