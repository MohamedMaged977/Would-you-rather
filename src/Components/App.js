import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import QuestionPage from "./QuestionPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Question from "./Question";
import Nav from "./Nav";
import NewQuestion from "./NewQuestion";
import LeaderBoard from "./LeaderBoard";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <Fragment>
          <div className="container">
            {
              //<Route path="/" exact component={LoginPage} />
            }
            <Nav />
            <div>
              <Route path="/homepage" component={HomePage} />
              <Route path="/newQuestion" component={NewQuestion} />
              <Route path="/leaderboard" component={LeaderBoard} />

              <Route path="/question/:id" component={QuestionPage} />
              <Route path="/" exact component={LoginPage} />
            </div>
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default connect()(App);
