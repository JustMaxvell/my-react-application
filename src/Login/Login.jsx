import React from "react";

import "./Login.css";

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: "",
      users: [
        { login: "Maxvell", password: "11111" },
        { login: "Zhenya", password: "22222" },
      ],
      isValid: { login: true, password: true },
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onBlur = (e) => {
    this.setState({
      isValid: { ...this.state.isValid, [e.target.name]: true },
    });
  };

  getInputStyle = (name) => {
    if (this.state.isValid[name] === false) {
      return { borderBottom: "solid 2px red" };
    }
  };

  verification = () => {
    this.state.users.forEach((user) => {
      if (user.login === this.state.login) {
        if (user.password === this.state.password) {
          this.props.login();
        } else {
          this.setState({
            isValid: { ...this.state.isValid, password: false },
          });
        }
      } else {
        this.setState({
          isValid: { ...this.state.isValid, login: false, password: false },
        });
      }
    });
  };

  render() {
    return (
      <>
        <form
          className="loginForm"
          onSubmit={(e) => {
            e.preventDefault();
            this.verification();
          }}
        >
          <input
            type="text"
            name="login"
            style={this.getInputStyle("login")}
            value={this.state.login}
            placeholder="Login"
            autoComplete="off"
            onChange={this.onChange}
            onBlur={this.onBlur}
          />
          <input
            type="password"
            name="password"
            style={this.getInputStyle("password")}
            value={this.state.password}
            placeholder="Password"
            onChange={this.onChange}
            onBlur={this.onBlur}
          />
          <button className="loginIn" type="submit" onClick={this.verification}>
            LOGIN IN
          </button>
          <button className="loginUp" type="button" disabled>
            LOGIN UP
          </button>
        </form>
      </>
    );
  }
}
