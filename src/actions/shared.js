import { getInitialData } from "../Data/helper";
import { receiveUsers } from "../actions/users";
import { receiveQuestions } from "../actions/questions";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
    });
  };
}
