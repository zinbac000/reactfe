import React, { Component } from "react";
import styles from "./DataBinding.module.css";

export default class DataBinding extends Component {
  name = "frontend44";
  img = "https://picsum.photos/300";

  renderImg = () => {
    return (
      <div className="card w-25 mx-auto" style={{ padding: "15px" }}>
        <img src={this.img} alt="test" className="card-img-top" style={{ boxShadow: "0 0 10px rgba(0,0,0,0.7)" }} />
        <div className="card-body">
          <h5 className={"card-title " + styles.title}>Title</h5>
          <p className="card-text">content</p>
        </div>
      </div>
    );
  };

  render() {
    let title = "CYBERSOFT - FE 44";

    let srcImg = "https://picsum.photos/200";

    const renderText = () => {
      return (
        <div>
          <h1>Hello</h1>
        </div>
      );
    };
    return (
      <div>
        <h1>{title}</h1>
        <img className="d-block" src={srcImg} alt="placeholder" />
        {renderText()}
        <p>{this.name}</p>
        {this.renderImg()}
      </div>
    );
  }
}
