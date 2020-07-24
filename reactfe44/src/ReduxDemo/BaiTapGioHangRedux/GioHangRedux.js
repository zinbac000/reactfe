import React, { Component } from "react";

// thư viện kết nối giữa react component và redux store
import { connect } from "react-redux";

import { deleteCartItem } from "../../redux/actions/GioHangActionCreator";

class GioHangRedux extends Component {
  renderGioHang = () => {
    return this.props.gioHang.map((spGioHang) => {
      return (
        <tr key={spGioHang.maSP}>
          <td>{spGioHang.maSP}</td>
          <td>{spGioHang.tenSP}</td>
          <td>
            <img width={40} src={spGioHang.hinhAnh} alt="san pham" />
          </td>
          <td>{spGioHang.gia.toLocaleString()}</td>
          <td>
            <button className="btn btn-dark mr-2">-</button>
            {spGioHang.soLuong}
            <button className="btn btn-dark ml-2">+</button>
          </td>
          <td>{(spGioHang.gia * spGioHang.soLuong).toLocaleString()}</td>
          <td>
            <button className="btn btn-danger" onClick={() => this.props.deleteCartItem(spGioHang.maSP)}>
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div>
        <h3>Giỏ hàng</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Mã SP</th>
              <th>Tên SP</th>
              <th>Hình ảnh</th>
              <th>Giá bán</th>
              <th>Số lượng</th>
              <th>Thành tiền</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderGioHang()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  gioHang: state.GioHangReducer.gioHang
});

const mapDispatchToProps = {
  deleteCartItem
};

export default connect(mapStateToProps, mapDispatchToProps)(GioHangRedux);
