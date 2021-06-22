import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQ } from "../Data/_DATA";
import { formatDate } from "../Data/helper";
/*<img src={avatar} alt={`Avatar of ${author}`} className="avatar" />
        <div className="tweet-info">
          <div>
            <span>{author}</span>
            <div>{formatDate(timestamp)}</div>
            <p>Would you rather?</p>
            <p>{optionOne.text}</p>
            <p>{optionTwo.text}</p>
            <button>View Pull</button>
          </div>
        </div>
        */
function isAnswered(question, authedUser) {
  return [...question.optionOne.votes, ...question.optionTwo.votes].reduce(
    (acc, userId) => acc || userId === authedUser,
    false
  );
}
class QuestionPage extends Component {
  render() {
    const { question, authedUser } = this.props;
    const answered = isAnswered(question, authedUser);
    //const { timestamp, author, avatar, optionOne, optionTwo } = question;
    return (
      <div className="tweet">
        {console.log(question)}
        {question ? (
          <>
            <img
              src={question.avatar}
              alt={`Avatar of ${question.author}`}
              className="avatar"
            />
            <div className="tweet-info">
              <div>
                <span>{question.author}</span>
                <div>{formatDate(question.timestamp)}</div>
                <p>Would you rather?</p>
                <button disabled={answered}>{question.optionOne.text}</button>
                <br />
                <button disabled={answered}>{question.optionTwo.text}</button>
              </div>
            </div>{" "}
          </>
        ) : null}
      </div>
    );
  }
}
function mapStateToProps({ users, questions, authedUser }, props) {
  const { id } = props.match.params;

  const question = questions[id];

  return {
    id,
    authedUser,
    question: question ? formatQ(question, users[question.author]) : null,
  };
}
export default connect(mapStateToProps)(QuestionPage);
