const quizReducer = (state, action) => {
  switch (action.type) {

      case "ANSWER":
        const updatedState = {
          ...state,
          currentQuestion: state.currentQuestion + 1,
          answers: [...state.answers, action.payload]
        };
        sessionStorage.setItem("quizState", JSON.stringify(updatedState)); 
        return updatedState;
  
      case "RESET":
        sessionStorage.removeItem("quizState"); 
        return { currentQuestion: 0, answers: [] };
  
      default:
        return state;
  }
};

export default quizReducer;