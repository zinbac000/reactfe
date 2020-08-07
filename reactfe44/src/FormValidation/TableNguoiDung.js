import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "../redux/actions/index";

class TableNguoiDung extends Component {
  handleEditUser = (user) => () => {
    this.props.editUser(user);
  };

  renderMangNguoiDung = () => {
    return this.props.mangNguoiDung.map((nguoidung) => (
      <tr key={nguoidung.taiKhoan}>
        <td>{nguoidung.taiKhoan}</td>
        <td>{nguoidung.hoTen}</td>
        <td>{nguoidung.matKhau}</td>
        <td>{nguoidung.email}</td>
        <td>{nguoidung.soDt}</td>
        <td>{nguoidung.maLoaiNguoiDung}</td>
        <td>
          <button className="btn btn-primary" onClick={this.handleEditUser(nguoidung)}>
            Chỉnh sửa
          </button>
        </td>
      </tr>
    ));
  };

  render() {
    return (
      <div className="container">
        <div className="card m-auto text-white" style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }}>
          <div className="card-header bg-dark text-center display-4">Danh sách người dùng</div>
          <div className="card-body p-0">
            <table className="card-table table">
              <thead>
                <tr>
                  <th>Tài khoản</th>
                  <th>Họ tên</th>
                  <th>Mật khẩu</th>
                  <th>Email</th>
                  <th>Số điện thoại</th>
                  <th>Loại người dùng</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>{this.renderMangNguoiDung()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  mangNguoiDung: state.BaiTapQuanLyNguoiDungReducer.mangNguoidung
});

const mapDispatchToProps = {
  editUser: actions.editUser
};

export default connect(mapStateToProps, mapDispatchToProps)(TableNguoiDung);
