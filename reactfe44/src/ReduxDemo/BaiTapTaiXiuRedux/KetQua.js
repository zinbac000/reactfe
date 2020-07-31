import React, { Component } from "react";

export default class KetQua extends Component {
  render() {
    return (
      <div className="text-center">
        <h2>
          Bạn đã chọn: <span style={{ color: "red" }}>Tài</span>
        </h2>
        <h2>
          Bạn đã thắng: <span style={{ color: "blue" }}>0</span>
        </h2>
        <h2>
          Tổng số bàn chơi: <span style={{ color: "orange" }}>0</span>
        </h2>
      </div>
    );
  }
}
