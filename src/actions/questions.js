import Question from "../Components/Question";
import { formatQuestion, _saveQuestion } from "../Data/_DATA";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const TOGGLE_QUESTION = "TOGGLE_QUESTION";
export const ADD_QUESTION = "ADD_QUESTION";

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}
export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser, users } = getState();

    return _saveQuestion({
      optionOneText: optionOneText,
      optionTwoText: optionTwoText,
      author: users[authedUser],
    }).then((question) => dispatch(addQuestion(question)));
  };
}
export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}
