import React, { Component } from "react";

import classes from "./BaiTapGameBauCua.module.css";

import TongDiem from "./TongDiem";
import DanhSachCuoc from "./DanhSachCuoc";
import XucSac from "./XucSac";

export default class BaiTapGameBauCua extends Component {
  render() {
    return (
      <div className={["container", classes.gameBauCua].join(" ")}>
        <div className="text-center mt-3">
          <img className="w-50" src="./img/logo.png" alt="logo" />
        </div>
        <div className="row">
          <div className="col-12">
            <TongDiem />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <DanhSachCuoc />
          </div>
          <div className="col-12 col-md-6">
            <XucSac />
          </div>
        </div>
      </div>
    );
  }
}
