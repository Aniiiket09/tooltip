import React from "react";
import "./index.css";
import Tooltip from "./Tooltip";

// APP COMPONENT
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      positoin: "top",
      hovering: false,
    };
  }

  // FUNCTIONALITY FOR HANLDECLICK
  handleClick = (pos) => {
    this.setState({
      position: pos,
    });
  };

  // FUNCTIONALITY FOR HANDLE_MOUSE_ENTER
  handleMouseEnter = () => {
    this.setState({ hovering: true });
  };

  // FUNCTIONALITY FOR HANDLE_MOUSE_LEAVE
  handleMouseLeave = () => {
    this.setState({ hovering: false });
  };

  render() {
    return (
      <div className="App">
        <div className="btn-position">
          <div className="grp-name">Select the position for hovering</div>
          {/* BUTTONS WHICH WILL APPEAR ON TOP */}
          <button
            className={this.state.position === "top" ? "btn active" : "btn"}
            onClick={(e) => {
              this.handleClick("top");
            }}
          >
            Top
          </button>

          <button
            className={this.state.position === "left" ? "btn active" : "btn"}
            onClick={(e) => {
              this.handleClick("left");
            }}
          >
            Left
          </button>

          <button
            className={this.state.position === "right" ? "btn active" : "btn"}
            onClick={(e) => {
              this.handleClick("right");
            }}
          >
            Right
          </button>

          <button
            className={this.state.position === "down" ? "btn active" : "btn"}
            onClick={(e) => {
              this.handleClick("down");
            }}
          >
            Bottom
          </button>
        </div>

        {/* BUTTON CONTAINER WHICH WILL BE USED FOR HOVERING */}
        <div id="button-container">
          <button
            className="btn hover-btn"
            onMouseOver={this.handleMouseEnter}
            onMouseOut={this.handleMouseLeave}
          >
            Hover Over Me!!!
          </button>
          {this.state.hovering && <Tooltip position={this.state.position} />}
        </div>

        {/* FOR SHOWING COPYRIGHTS YEAH!!! */}
        <div>
          <h5 className="copyright">
            Copyright 2023 iamAniket. All Rights Reserved!
          </h5>
        </div>
      </div>
    );
  }
}

export default App;
