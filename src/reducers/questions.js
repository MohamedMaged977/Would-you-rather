import {
  ADD_ANSWER,
  ADD_QUESTION,
  RECEIVE_QUESTIONS,
} from "../actions/questions";
export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_QUESTION:
      console.log("add action ", action);
      return {
        ...state,
        [action.question.id]: action.question,
      };
    case ADD_ANSWER:
      return {
        ...state,
        [action.question.id]: {
          ...state[action.question.id],
          optionOne: {
            votes:
              action.answer === "op1"
                ? state[action.question.id].optionOne.votes.concat([
                    action.authedUser,
                  ])
                : null,
          },
          optionTwo: {
            votes:
              action.answer === "op2"
                ? state[action.question.id].optionTwo.votes.concat([
                    action.authedUser,
                  ])
                : null,
          },
        },
      };
    default:
      return state;
  }
}
