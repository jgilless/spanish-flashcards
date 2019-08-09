import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";

import CardContainer from "../components/card/container";
import EndReviewCard from "../components/card/end-review";
import Mode from "../components/card/mode";

import datasets from "../data/index";

export default function Review({ data }) {
  const [index, setIndex] = useState(0);
  const [deck, setDeck] = useState([]);
  const [mode, setMode] = useState(null);

  useEffect(() => {
    setDeck(datasets[data]);
    return () => {
      setDeck([]);
    };
  }, []);

  function restartReview() {
    setIndex(0);
  }

  function nextCard() {
    if (index === deck.length) {
      return;
    }
    setIndex(index + 1);
  }

  function prevCard() {
    if (index === 0) {
      return;
    }
    setIndex(index - 1);
  }

  if (mode === null) {
    return (
      <Mode
        setReverse={setMode}
        forwardText="Spanish/English"
        reverseText="English/Spanish"
      />
    );
  }

  if (deck.length === 0) {
    return <div>Loading...</div>;
  } else if (deck.length === index) {
    return (
      <EndReviewCard>
        <Link to="/">Navigate Home</Link>
        <Link to={`/review/${data}`} onClick={restartReview}>
          Restart Review
        </Link>
      </EndReviewCard>
    );
  }

  const card = deck[index];

  return (
    <CardContainer
      question={mode ? card.a : card.q}
      answer={mode ? card.q : card.a}
      posLabel="Next"
      posOpt={nextCard}
      negLabel="Previous"
      negOpt={prevCard}
    />
  );
}

Review.propTypes = {
  data: PropTypes.string
};
