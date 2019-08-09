import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";

import datasets from "../data/index";

import { shuffleArray } from "../utils/array";

import CardContainer from "../components/card/container";
import EndCard from "../components/card/end";
import Mode from "../components/card/mode";

export default function Quiz({ data }) {
  const [index, setIndex] = useState(0);
  const [numCorrect, setNumCorrect] = useState(0);
  const [quiz, setQuiz] = useState([]);
  const [shuffle, setShuffle] = useState([]);
  const [mode, setMode] = useState(null);

  useEffect(() => {
    setQuiz(datasets[data]);
    let newShuffle = new Array(datasets[data].length);
    for (let i = 0; i < newShuffle.length; i++) {
      newShuffle[i] = i;
    }
    setShuffle(shuffleArray(newShuffle));
    return () => {
      setQuiz([]);
    };
  }, []);

  function resetQuiz() {
    let newShuffle = new Array(datasets[data].length);
    for (let i = 0; i < newShuffle.length; i++) {
      newShuffle[i] = i;
    }
    setShuffle(shuffleArray(newShuffle));
    setIndex(0);
    setNumCorrect(0);
  }

  function answerCorrect() {
    setIndex(index + 1);
    setNumCorrect(numCorrect + 1);
  }

  function answerIncorrect() {
    setIndex(index + 1);
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

  if (quiz.length === 0) {
    return <div>Loading...</div>;
  } else if (quiz.length === index) {
    return (
      <EndCard correct={numCorrect} total={quiz.length}>
        <Link to="/">Navigate Home</Link>
        <Link to={`/quiz/${data}`} onClick={resetQuiz}>
          Retake Quiz
        </Link>
      </EndCard>
    );
  }

  const card = quiz[shuffle[index]];

  return (
    <CardContainer
      question={mode ? card.a : card.q}
      answer={mode ? card.q : card.a}
      posLabel="Correct"
      posOpt={answerCorrect}
      negLabel="Incorrect"
      negOpt={answerIncorrect}
    />
  );
}

Quiz.propTypes = {
  data: PropTypes.string
};
