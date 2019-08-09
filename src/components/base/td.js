import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const StyledTD = styled.td({
  padding: "0 1rem 1rem 1rem",
  whiteSpace: "pre-line"
});

export default function TD({ children }) {
  return <StyledTD>{children}</StyledTD>;
}

TD.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};
