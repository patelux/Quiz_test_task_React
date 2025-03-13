const quizReducer = (state, action) => {
  switch (action.type) {
    case "ANSWER":
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
        answers: [...state.answers, action.payload],
      };
    case "RESET":
      return { currentQuestion: 0, answers: [] };
    default:
      return state;
  }
};

export default quizReducer;