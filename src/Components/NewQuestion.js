import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";
import { Redirect } from "react-router-dom";

class NewQuestion extends Component {
  state = {
    optionOneText: "",
    optionTwoText: "",
    toHome: false,
  };
  componentDidMount() {
    const { authedUser } = this.props;
    !authedUser && this.props.history.push("/");
  }
  handleOp1 = (e) => {
    const text = e.target.value;
    this.setState({
      optionOneText: text,
    });
    console.log("inp1 ", this.state.optionOneText);
  };
  handleOp2 = (e) => {
    const text = e.target.value;
    this.setState({
      optionTwoText: text,
    });
    console.log("inp2 ", this.state.optionTwoText);
  };
  handleSubmit = (e) => {
    e.preventDefault();

    const { optionOneText, optionTwoText } = this.state;
    const { dispatch } = this.props;

    dispatch(handleAddQuestion(optionOneText, optionTwoText));

    this.setState(() => ({
      optionOneText: "",
      optionTwoText: "",

      toHome: true,
    }));
  };
  render() {
    const { optionOneText, optionTwoText, toHome } = this.state;
    const { authedUser } = this.props;

    if (toHome === true) {
      return <Redirect to="/homepage" />;
    }

    return authedUser ? (
      <div>
        <h3 className="center">Compose new Pull</h3>
        <form className="new-tweet" onSubmit={this.handleSubmit}>
          <h2>Would you rather ? </h2>
          <input
            placeholder="Option one?"
            value={optionOneText}
            onChange={(e) => this.handleOp1(e)}
            className="textarea"
            maxLength={280}
          />
          <input
            placeholder="Option two?"
            value={optionTwoText}
            onChange={(e) => this.handleOp2(e)}
            className="textarea"
            maxLength={280}
          />
          <button
            className="btn"
            type="submit"
            disabled={optionOneText === "" || optionTwoText === ""}
          >
            Submit
          </button>
        </form>
      </div>
    ) : null;
  }
}
function mapStateToProps({ questions, authedUser }) {
  return {
    authedUser,
    questions,
  };
}

export default connect(mapStateToProps)(NewQuestion);
