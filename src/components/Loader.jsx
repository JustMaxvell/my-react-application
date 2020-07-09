import React from "react";

import "./Loader.css";

export function Loader() {
  return (
    <>
      <div className="spinner-box">
        <div className="configure-border-1">
          <div className="configure-core"></div>
        </div>
        <div className="configure-border-2">
          <div className="configure-core"></div>
        </div>
      </div>
    </>
  );
}
