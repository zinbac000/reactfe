import React, { Component } from "react";

export default class ProductDetailComponent extends Component {
  render() {
    let { tenSP, manHinh, heDieuHanh, cameraTruoc, cameraSau, ram, rom, hinhAnh } = this.props.product;
    return (
      <div className="row">
        <div className="col-12">
          <h1 className="text-center display-3">Chi tiết sản phẩm</h1>
        </div>
        <div className="col-4">
          <h3 className="text-center">{tenSP}</h3>
          <img className="d-block w-100" src={hinhAnh} alt="product banner" />
        </div>
        <div className="col-8">
          <h3 className="text-center">Thông Số Kỹ Thuật</h3>
          <table class="table table-light table-striped">
            <tbody>
              <tr>
                <td>Màn hình</td>
                <td>{manHinh}</td>
              </tr>
              <tr>
                <td>Hệ Điều Hành</td>
                <td>{heDieuHanh}</td>
              </tr>
              <tr>
                <td>Camera Trước</td>
                <td>{cameraTruoc}</td>
              </tr>
              <tr>
                <td>Camera Sau</td>
                <td>{cameraSau}</td>
              </tr>
              <tr>
                <td>RAM</td>
                <td>{ram}</td>
              </tr>
              <tr>
                <td>ROM</td>
                <td>{rom}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
