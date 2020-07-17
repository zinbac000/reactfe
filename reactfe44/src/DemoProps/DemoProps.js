import React, { Component } from "react";
import Child from "./Child";

export default class DemoProps extends Component {
  render() {
    let product = {
      id: 1,
      name: "iPhoneX",
      price: 1000,
      image: "./img/lt_hp.png"
    };

    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Child {...product} />
          </div>
        </div>
      </div>
    );
  }
}
