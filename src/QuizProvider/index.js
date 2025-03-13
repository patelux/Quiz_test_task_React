import React, { createContext, useReducer, useContext } from "react";
import quizReducer from "../quizReducer";

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, { currentQuestion: 0, answers: [] });

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => useContext(QuizContext);

export default QuizContext;