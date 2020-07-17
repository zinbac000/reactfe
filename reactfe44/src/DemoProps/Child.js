import React, { Component } from "react";

export default class Child extends Component {
  render() {
    let { image, price, name } = this.props;
    return (
      <div className="card">
        <img className="card-img-top" src={image} alt="product" />
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <p className="card-text">{price}</p>
        </div>
      </div>
    );
  }
}
