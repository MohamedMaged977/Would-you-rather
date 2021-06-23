import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQ } from "../Data/_DATA";
import { formatDate } from "../Data/helper";
import { Link, withRouter } from "react-router-dom";

class Question extends Component {
  render() {
    const { question } = this.props;

    if (question === null) {
      return <p>This Tweet doesn't existd</p>;
    }
    const { id, timestamp, author, avatar, optionOne, optionTwo } = question;

    return (
      <div className="tweet">
        <img src={avatar} alt={`Avatar of ${author}`} className="avatar" />
        <div className="tweet-info">
          <div>
            <span>{author}</span>
            <div>{formatDate(timestamp)}</div>
            <p>Would you rather?</p>
            <Link to={`/question/${id}`}>View Poll</Link>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users, questions }, { id }) {
  console.log("mapStateToProps users, questions, id", users, questions, id);
  const question = questions[id];
  console.log("map q id ", id);

  return {
    question: question ? formatQ(question, users[question.author]) : null,
  };
}
export default withRouter(connect(mapStateToProps)(Question));
