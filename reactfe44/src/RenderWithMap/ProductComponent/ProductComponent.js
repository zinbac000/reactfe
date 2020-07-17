import React, { Component } from "react";

export default class ProductComponent extends Component {
  render() {
    let { hinhAnh, tenSP, giaBan } = this.props.product;
    return (
      <div className="card h-100">
        <img src={hinhAnh} alt="product" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{tenSP}</h5>
          <p className="text-default card-text">{giaBan} VND</p>
          <button className="btn btn-primary">Xem chi tiết</button>
        </div>
      </div>
    );
  }
}
