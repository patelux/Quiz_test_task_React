import React, { useState, useEffect, useMemo } from "react";
import { useQuiz } from "../../QuizProvider";
import Results from "../Results";
import Hero from "../Hero";

export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  // const [isMounted, setIsMounted] = useState(true);
  const memoizedHero = useMemo(() => <Hero />, []);

  const getQuestions = async () => {
    try {
      const response = await fetch('/data/questions.json');
      const data = await response.json();
      if (isMounted) { 
        setQuestions(data);
      }
    } catch (error) {
      console.error("Ошибка загрузки вопросов:", error);
    }
  };

  useEffect(() => {
    // setIsMounted(true); 
    getQuestions();
    // return () => {
    //   setIsMounted(false); 
    // };
  }, []);

  const { state, dispatch } = useQuiz();
  const questionIndex = state.currentQuestion;

  if (questionIndex >= questions.length) {
    return <Results />;
  }

  const question = questions[questionIndex];

  return (
    <>
      {memoizedHero}
      <div className="container">
            <div className="qiuz">
                <h2 className="qiuz_title">
                    Question <span>{questionIndex+1}</span> of <span>{questions.length}</span>
                </h2>
                <p className="qiuz_description">
                {question.text}
                </p>
                <div className="btn-wrapper">
                    {question.answers.map((answer, index) => (
                        <button key={index} className="button" onClick={() => dispatch({ type: "ANSWER", payload: answer })}>
                            {answer}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    </>
  );
}

