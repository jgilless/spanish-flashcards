import React from "react";
import PropTypes from "prop-types";

import { StyledEndCard } from "./end";

export default function EndReviewCard({ children }) {
  return <StyledEndCard>{children}</StyledEndCard>;
}

EndReviewCard.propTypes = {
  children: PropTypes.array
};
