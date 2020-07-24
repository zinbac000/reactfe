import React, { Component } from "react";

import SanPhamRedux from "./SanPhamRedux";

export default class DanhSachSanPhamRedux extends Component {
  renderSanPham = () => {
    return this.props.mangSanPham.map((sp) => {
      return (
        <div className="col-12 col-md-4 mb-3" key={sp.maSP}>
          <SanPhamRedux sanPham={sp} />
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">{this.renderSanPham()}</div>
      </div>
    );
  }
}
