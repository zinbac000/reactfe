import React, { Component } from "react";

export default class FormValidation extends Component {
  state = {
    values: {
      username: "",
      password: "",
      email: "",
      fullname: "",
      phone: "",
      userType: "customer"
    },
    errors: {
      username: "",
      password: "",
      email: "",
      fullname: "",
      phone: ""
    }
  };

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

    console.log(this.state.values);
  };

  render() {
    return (
      <form style={{ width: "100vw", height: "100vh" }} className="container d-flex justify-content-center align-items-center">
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
                    name="username"
                    placeholder="Tài khoản..."
                    value={this.state.username}
                    onChange={this.handleInputChange}
                  />
                  <span className="text-danger">{this.state.errors.username}</span>
                </div>
                <div className="form-group">
                  <label>Mật khẩu</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Mật khẩu..."
                    value={this.state.password}
                    onChange={this.handleInputChange}
                  />
                  <span className="text-danger">{this.state.errors.password}</span>
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email..."
                    value={this.state.email}
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
                    name="fullname"
                    placeholder="Họ tên..."
                    value={this.state.fullname}
                    onChange={this.handleInputChange}
                  />
                  <span className="text-danger">{this.state.errors.fullname}</span>
                </div>
                <div className="form-group">
                  <label>Số điện thoại</label>
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    placeholder="Số điện thoại..."
                    value={this.state.phone}
                    onChange={this.handleInputChange}
                  />
                  <span className="text-danger">{this.state.errors.phone}</span>
                </div>
                <div className="form-group">
                  <label>Loại người dùng</label>
                  <select name="userType" className="form-control" value={this.state.userType} onChange={this.handleInputChange}>
                    <option value="customer">Khách hàng</option>
                    <option value="administrator">Quản trị viên</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="text-left col-12">
                <button style={{ backgroundColor: "#1e0e69" }} className="btn btn-success" onClick={this.handleSubmit}>
                  Đăng ký
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
