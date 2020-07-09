import React from "react";

import "./QuitButton.css";

export function QuitButton(props) {
  return (
    <div className="quitButton" onClick={props.quit}>
      <span></span>
      <span></span>
    </div>
  );
}
