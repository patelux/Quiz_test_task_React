import './styles/reset.css';
import './styles/style.css';

import React from "react";
import { QuizProvider } from "./QuizProvider";
import  Header  from "./components/Header";
import  Quiz  from "./components/Quiz";


const App = () => {
  return (
    <QuizProvider >
      <div className='page_wrapper'>
        <Header />
        <Quiz />
      </div>
    </QuizProvider >
  );
};

export default App;