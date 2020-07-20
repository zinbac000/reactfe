import React, { Component } from "react";

export default class SP extends Component {
  render() {
    let { hinhAnh, tenSP, giaBan } = this.props.product;
    return (
      <div className="card h-100">
        <img src={hinhAnh} alt="product" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{tenSP}</h5>
          <p className="text-default card-text">{giaBan} VND</p>
        </div>
        <div className="card-footer">
          <button onClick={() => this.props.clicked(this.props.product)} className="btn btn-success mr-3">
            Xem chi tiết
          </button>
          <button onClick={() => this.props.addToCart(this.props.product.maSP)} className="btn btn-primary">
            Thêm vào giỏ
          </button>
        </div>
      </div>
    );
  }
}
