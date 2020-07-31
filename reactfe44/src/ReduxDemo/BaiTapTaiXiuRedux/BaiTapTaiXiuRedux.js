import React, { Component } from "react";
import BanCuoc from "./BanCuoc";
import KetQua from "./KetQua";

import "./BaiTapTaiXiuRedux.css";

export default class BaiTapTaiXiuRedux extends Component {
  render() {
    return (
      <div className="taiXiuContainer">
        <h1 className="text-center">Bài tập tài xỉu</h1>
        <BanCuoc />
        <KetQua />
      </div>
    );
  }
}
