import React, { Component } from "react";

export default class StateHandling extends Component {
  state = {
    isLogin: false
  };

  userName = "Vinh";

  handleLogin() {
    this.setState(
      {
        isLogin: true
      },
      () => {
        console.log(this.state.isLogin);
      }
    );
  }

  renderContent = () => {
    if (this.state.isLogin) {
      return <h1>Hello {this.userName}</h1>;
    }
    return <button onClick={() => this.handleLogin()}>Đăng nhập</button>;
  };

  render() {
    return <div>{this.renderContent()}</div>;
  }
}
