import React, { Component } from "react";

export default class ProductDetailComponent extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-12">
          <h1 className="text-center display-3">Chi tiết sản phẩm</h1>
        </div>
        <div className="col-4">
          <img src={this.props.product.hinhAnh} alt="product banner" />
        </div>
        <div className="col-8"></div>
      </div>
    );
  }
}
