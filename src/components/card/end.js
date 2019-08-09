import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

export const StyledEndCard = styled.div({
  display: "grid",
  alignContent: "center",
  justifyItems: "center",
  minHeight: "80vh",
  gridGap: "1rem"
});

const StyledNumber = styled.div(
  {
    fontSize: "2rem"
  },
  props => ({
    color: props.theme.colors.secondary
  })
);

const StyledOf = styled.span({
  fontSize: "1rem",
  color: "#000000"
});

export default function EndCard({ correct, total, children }) {
  return (
    <StyledEndCard>
      <div>You got</div>
      <StyledNumber>
        {correct} <StyledOf>of</StyledOf> {total}
      </StyledNumber>
      <div>For a score of</div>
      <StyledNumber>{((correct / total) * 100).toPrecision(4)}%</StyledNumber>
      {children}
    </StyledEndCard>
  );
}

EndCard.propTypes = {
  correct: PropTypes.number,
  total: PropTypes.number,
  children: PropTypes.array
};
