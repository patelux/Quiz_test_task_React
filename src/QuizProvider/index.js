import React, { createContext, useReducer, useContext } from "react";
import quizReducer from "../quizReducer";

const QuizContext = createContext();

const getInitialState = () => {
  const savedState = localStorage.getItem("quizState");
  return savedState ? JSON.parse(savedState) : { currentQuestion: 0, answers: [] };
};

export const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, getInitialState());

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => useContext(QuizContext);

export default QuizContext;