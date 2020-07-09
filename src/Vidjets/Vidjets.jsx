import React from "react";

import "./Vidjets.css";

import { WeatherVidjet } from "./WeatherVidjet";
import { QuitButton } from "../components/QuitButton";

export class Vidjets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actualVidjet: "none",
    };
  }

  onClick = (e) => {
    this.setState({
      actualVidjet: e.target.className,
    });
  };

  quit = () => {
    this.setState({
      actualVidjet: "none",
    });
  };

  render() {
    if (this.state.actualVidjet === "none") {
      return (
        <>
          <QuitButton quit={this.props.quit} />
          <div className="vidjets">
            <div
              className="vidjets__weatherVidjet"
              onClick={this.onClick}
            ></div>
          </div>
        </>
      );
    } else if (this.state.actualVidjet === "vidjets__weatherVidjet") {
      return <WeatherVidjet quit={this.quit} />;
    }
  }
}
