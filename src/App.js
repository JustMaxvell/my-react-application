import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import "./App.css";

import { Login } from "./Login/Login";
import { Vidjets } from "./Vidjets/Vidjets";

class App extends React.Component {
  state = {
    isLogined: false,
  };

  login = () => {
    this.setState({
      isLogined: true,
    });
  };

  quit = () => {
    this.setState({
      isLogined: false,
    });
  };

  render() {
    if (!this.state.isLogined) {
      return (
        <Router>
          <Route path = "/">
            <Redirect to = "/login"/>
          </Route>
          <Route path="/login">
            <div className="application">
              <Login login={this.login} />
            </div>
          </Route>
        </Router>
      );
    }

    return (
      <Router>
        <Route path = "/">
            <Redirect to = "/vidjets"/>
          </Route>
        <Route path="/vidjets">
          <div className="application">
            <Vidjets quit={this.quit} />
          </div>
        </Route>
      </Router>
    );
  }
}

export default App;
