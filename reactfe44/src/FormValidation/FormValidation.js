import React, { Component } from "react";
import TableNguoiDung from "./TableNguoiDung";

import { connect } from "react-redux";
import * as actions from "../redux/actions/index";

import _ from "lodash";

class FormValidation extends Component {
  state = {
    values: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      hoTen: "",
      soDt: "",
      maLoaiNguoiDung: "KhachHang"
    },
    errors: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      hoTen: "",
      soDt: ""
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (!_.isEqual(prevProps.nguoiDungEdit, this.props.nguoiDungEdit)) {
      this.setState({
        values: this.props.nguoiDungEdit
      });
    }
  }

  handleInputChange = (event) => {
    let { name, value, type } = event.target;

    let newValues = { ...this.state.values, [name]: value };

    let newErrors = { ...this.state.errors, [name]: value.trim() === "" ? `${name} không được rỗng` : "" };

    if (type === "email") {
      let regexEmail = /^\w+@\w+\.\w{2,}$/;
      if (!regexEmail.test(value)) {
        newErrors[name] = name + " không hợp lệ!";
      }
    }

    this.setState({
      values: newValues,
      errors: newErrors
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let valid = true;

    for (let key in this.state.values) {
      if (this.state.values[key] === "") {
        valid = false;
        break;
      }
    }

    for (let key in this.state.errors) {
      if (this.state.errors[key] !== "") {
        valid = false;
        break;
      }
    }

    if (!valid) {
      alert("Dữ liệu không hợp lệ!");
      return;
    }

    this.props.isEditMode ? this.props.saveUser(this.state.values) : this.props.addUser(this.state.values);
  };

  render() {
    const { taiKhoan, matKhau, hoTen, email, maLoaiNguoiDung, soDt } = this.state.values;
    return (
      <>
        <form className="container d-flex justify-content-center pb-5">
          <div className="card rounded w-50" style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }}>
            <div className="card-header bg-dark text-light text-center">
              <h3>Form đăng ký</h3>
            </div>
            <div className="card-body bg-white">
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <label>Tài khoản</label>
                    <input
                      type="text"
                      className="form-control"
                      name="taiKhoan"
                      placeholder="Tài khoản..."
                      value={taiKhoan}
                      onChange={this.handleInputChange}
                      readOnly={this.props.isEditMode}
                    />
                    <span className="text-danger">{this.state.errors.taiKhoan}</span>
                  </div>
                  <div className="form-group">
                    <label>Mật khẩu</label>
                    <input
                      type="password"
                      className="form-control"
                      name="matKhau"
                      placeholder="Mật khẩu..."
                      value={matKhau}
                      onChange={this.handleInputChange}
                    />
                    <span className="text-danger">{this.state.errors.matKhau}</span>
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Email..."
                      value={email}
                      onChange={this.handleInputChange}
                    />
                    <span className="text-danger">{this.state.errors.email}</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <label>Họ tên</label>
                    <input
                      type="text"
                      className="form-control"
                      name="hoTen"
                      placeholder="Họ tên..."
                      value={hoTen}
                      onChange={this.handleInputChange}
                    />
                    <span className="text-danger">{this.state.errors.hoTen}</span>
                  </div>
                  <div className="form-group">
                    <label>Số điện thoại</label>
                    <input
                      type="text"
                      className="form-control"
                      name="soDt"
                      placeholder="Số điện thoại..."
                      value={soDt}
                      onChange={this.handleInputChange}
                    />
                    <span className="text-danger">{this.state.errors.soDt}</span>
                  </div>
                  <div className="form-group">
                    <label>Loại người dùng</label>
                    <select name="maLoaiNguoiDung" className="form-control" value={maLoaiNguoiDung} onChange={this.handleInputChange}>
                      <option value="KhachHang">Khách hàng</option>
                      <option value="QuanTriVien">Quản trị viên</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="text-left col-12">
                  <button style={{ backgroundColor: "#562c91" }} className="btn btn-success" onClick={this.handleSubmit}>
                    {this.props.isEditMode ? "Cập nhật" : "Đăng ký"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
        <TableNguoiDung />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  nguoiDungEdit: state.BaiTapQuanLyNguoiDungReducer.nguoiDungEdit,
  isEditMode: state.BaiTapQuanLyNguoiDungReducer.isEditMode
});

const mapDispatchToProps = {
  addUser: actions.addUser,
  saveUser: actions.saveUser,
  editUser: actions.editUser
};

export default connect(mapStateToProps, mapDispatchToProps)(FormValidation);
