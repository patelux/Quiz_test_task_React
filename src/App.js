import './styles/reset.css';
import './styles/style.css';

import React from "react";
import { QuizProvider } from "./QuizProvider";
import  Header  from "./components/Header";
import  Quiz  from "./components/Quiz";


const App = () => {
  return (
    <QuizProvider>
      <Header />
      <Quiz />
    </QuizProvider>
  );
};

export default App;