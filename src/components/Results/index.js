import React, { useEffect } from "react";
import { useQuiz } from "../../QuizProvider";

export default function Result (){

      const { state, dispatch } = useQuiz();

      useEffect(() => {
        const handleBeforeUnload = () => {
          dispatch({ type: "RESET" });
        };
        window.addEventListener("beforeunload", handleBeforeUnload);
        return () => {
          window.removeEventListener("beforeunload", handleBeforeUnload);
        };
      }, [dispatch]);

      return (
        <>
            <div className="container">
                <div className="results">
                    <h2 className="result_title">Results:</h2>
                    <ul className="results_wrapper">
                        {state.answers.map((answer, index) => (
                            <li key={index} className="result_scope">
                                    <span>{index+1}</span>
                                    <span>&nbsp;-&nbsp;
                                    </span>{answer}
                                </li>
                        ))}
                        </ul>
                </div>
            </div>
        </>
      );
};
    

