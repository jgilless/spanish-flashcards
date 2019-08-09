import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Button from "../base/button";

const StyledMode = styled.div({
  display: "grid",
  alignContent: "center",
  justifyItems: "center",
  minHeight: "80vh",
  gridGap: "1rem"
});

const StyledH2 = styled.h2({
  padding: "2rem"
});

export default function EndCard({ setReverse, forwardText, reverseText }) {
  function setTrue() {
    setReverse(true);
  }
  function setFalse() {
    setReverse(false);
  }
  return (
    <StyledMode>
      <StyledH2>Select the mode for the cards to appear:</StyledH2>
      <Button display="primary" onClick={setFalse}>
        {forwardText}
      </Button>
      <Button display="secondary" onClick={setTrue}>
        {reverseText}
      </Button>
    </StyledMode>
  );
}

EndCard.propTypes = {
  setReverse: PropTypes.func,
  forwardText: PropTypes.string,
  reverseText: PropTypes.string
};
