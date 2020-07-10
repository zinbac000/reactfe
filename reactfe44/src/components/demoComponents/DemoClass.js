import React, { Component } from "react";
import logo from "../../logo.svg";

export default class DemoClass extends Component {
  // Có thể định nghĩa thêm các thuộc tính và phương thức khác

  render() {
    return (
      <div className="card w-25 m-auto">
        <img className="card-img-top" src={logo} alt />
        <div className="card-body bg-primary text-light">
          <h4 className="card-title">Title</h4>
          <p className="card-text">Text</p>
        </div>
      </div>
    );
  }
}
