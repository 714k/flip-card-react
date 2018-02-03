import React, { Component } from "react";
import "./card.css";

class Card extends Component {
  render() {
    return (
      <div className={"card " + this.props.orientation}>
        <div className={(this.props.flip ? "flip" : "")}>
          <div className="front">
            Content Front
          </div>
          <div className="back">
            Content Back
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
