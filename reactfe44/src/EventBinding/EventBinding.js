import React, { Component } from "react";

export default class EventBinding extends Component {
  handleClick = () => {
    alert(`Hello fe44`);
  };
  showMessage = (msg) => {
    alert(`Hello ${msg}`);
  };
  render() {
    return (
      <div>
        <h3>Cách 1 handle event</h3>
        {/* Cách 1: truyền callback function */}
        <button className="btn btn-primary" type="button" onClick={this.handleClick}>
          Click me!
        </button>
        <button className="btn btn-primary" type="button" onClick={this.showMessage.bind(this, "Hào")}>
          Show message!
        </button>

        <h3>Cách 2 handle event</h3>
        {/* Cách 2: gọi handler trong 1 arrow function */}
        <button className="btn btn-primary" type="button" onClick={() => this.handleClick()}>
          Click me!
        </button>
        <button className="btn btn-primary" type="button" onClick={() => this.showMessage("Hào")}>
          Click me with name
        </button>
      </div>
    );
  }
}
