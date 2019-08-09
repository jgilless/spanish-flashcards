import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import Button from "../base/button";
import CardFlip from "./card";

const StyledCard = styled.div({
  width: "100%",
  minHeight: "80vh",
  display: "grid",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "3rem",
  overflow: "hidden"
});

export const StyledCardButtonsContainer = styled.div({
  width: "100%",
  display: "grid",
  gridAutoFlow: "column",
  position: "absolute",
  bottom: "0",
  gridGap: "0.5rem",
  padding: "0.5rem"
});

export default function Card({
  question,
  answer,
  posOpt,
  negOpt,
  negLabel,
  posLabel
}) {
  const [showAnswer, setShowAnswer] = useState(false);

  function sendPos() {
    setShowAnswer(false);
    setTimeout(posOpt, 80);
  }

  function sendNeg() {
    setShowAnswer(false);
    setTimeout(negOpt, 80);
  }

  function toggleShowAnswer() {
    setShowAnswer(!showAnswer);
  }

  return (
    <StyledCard>
      <CardFlip
        flip={toggleShowAnswer}
        isFlipped={showAnswer}
        question={question}
        answer={answer}
      />

      <StyledCardButtonsContainer>
        <Button onClick={sendNeg} design="danger">
          {negLabel}
        </Button>
        <Button onClick={sendPos} design="success">
          {posLabel}
        </Button>
      </StyledCardButtonsContainer>
    </StyledCard>
  );
}

Card.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
  posLabel: PropTypes.string,
  negLabel: PropTypes.string,
  posOpt: PropTypes.func,
  negOpt: PropTypes.func
};
