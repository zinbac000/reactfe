import React, { Component } from "react";

import { connect } from "react-redux";

import { addToCart } from "../../redux/actions/GioHangActionCreator";

class SanPhamRedux extends Component {
  render() {
    const { hinhAnh, tenSP, giaBan } = this.props.sanPham;
    return (
      <div className="card h-100">
        <img className="card-img-top" src={hinhAnh} alt="san pham" />
        <div className="card-body">
          <h4 className="card-title">{tenSP}</h4>
        </div>
        <div className="card-footer">
          <p>
            Giá: <strong>{giaBan.toLocaleString()}</strong>
          </p>
          <button className="btn btn-dark" onClick={() => this.props.addToCart(this.props.sanPham)}>
            Thêm vào giỏ
          </button>
        </div>
      </div>
    );
  }
}

const mapDispathToProps = {
  addToCart
};

export default connect(null, mapDispathToProps)(SanPhamRedux);
