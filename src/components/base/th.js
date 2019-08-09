import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const StyledTH = styled.th({
  whiteSpace: "pre-line",
  paddingBottom: "1rem"
});

export default function TH({ children }) {
  return <StyledTH>{children}</StyledTH>;
}

TH.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};
