import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const StyledTable = styled.table({
  paddingTop: "1rem",
  width: "100%",
  overflow: "hidden"
});

export default function Table({ children }) {
  return <StyledTable>{children}</StyledTable>;
}

Table.propTypes = {
  children: PropTypes.element
};
