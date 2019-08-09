import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const StyledOverlay = styled.div(
  {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: "fixed",
    touchAction: "none",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    willChange: "opacity",
    transition: "opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    opacity: 0
  },
  props => ({
    zIndex: props.theme.zIndex.overlay
  })
);

const Overlay = ({ open, onClick }) => {
  const styles = {
    opacity: open ? 1 : 0
  };
  return (
    <StyledOverlay
      aria-hidden="true"
      className="overlay"
      style={styles}
      onClick={onClick}
    />
  );
};

Overlay.propTypes = {
  open: PropTypes.bool.isRequired,
  onClick: PropTypes.func
};

export default Overlay;
