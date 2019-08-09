import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import Button from "../base/button";

const StyledFlipButton = styled.div({
  position: "absolute",
  bottom: "15vh",
  right: "0.5rem"
});

const StyledQATitle = styled.div(
  {
    display: "grid",
    alignItems: "center",
    textAlign: "center",
    height: "100%",
    width: "100%",
    whiteSpace: "pre-line",
    padding: "1rem"
  },
  props => {
    if (props.length > 60) {
      return {
        fontSize: "2rem"
      };
    }
    return {};
  }
);

const Styledfront = styled.div({
  width: "calc(100vw - 1rem)",
  height: "70vh",
  backfaceVisibility: "hidden",
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 2,
  transform: "rotateY(0deg)",
  boxShadow:
    "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)"
});

const StyledBack = styled.div({
  width: "calc(100vw - 1rem)",
  height: "70vh",
  backfaceVisibility: "hidden",
  position: "absolute",
  top: 0,
  left: 0,
  transform: "rotateY(180deg)",
  boxShadow:
    "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)"
});

const StyledFlipper = styled.div({
  transition: "200ms",
  transformStyle: "preserve-3d",
  position: "relative"
});

const StyledFlipContainer = styled.div({
  perspective: "1000px",
  width: "calc(100vw - 1rem)",
  height: "70vh"
});

export default function Card({ flip, isFlipped, question, answer }) {
  const styles = {
    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
  };

  return (
    <>
      <StyledFlipContainer onClick={flip}>
        <StyledFlipper style={styles}>
          <Styledfront>
            <StyledQATitle length={question.length}>{question}</StyledQATitle>
          </Styledfront>
          <StyledBack>
            <StyledQATitle length={answer.length}>{answer}</StyledQATitle>
          </StyledBack>
        </StyledFlipper>
      </StyledFlipContainer>
      <StyledFlipButton>
        <Button onClick={flip} design="primary">
          Flip Card
        </Button>
      </StyledFlipButton>
    </>
  );
}

Card.propTypes = {
  flip: PropTypes.func,
  isFlipped: PropTypes.bool,
  question: PropTypes.string,
  answer: PropTypes.string
};
