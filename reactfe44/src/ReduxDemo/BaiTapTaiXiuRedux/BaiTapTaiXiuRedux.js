import React, { Component } from "react";
import { connect } from "react-redux";
import BanCuoc from "./BanCuoc";
import KetQua from "./KetQua";

import * as actionCreators from "../../redux/actions/BaiTapTaiXiuAction";

import "./BaiTapTaiXiuRedux.css";

class BaiTapTaiXiuRedux extends Component {
  render() {
    return (
      <div className="taiXiuContainer text-center">
        <h1 className="text-center">Bài tập tài xỉu</h1>
        <BanCuoc />
        <KetQua />
        <button className="btnPlay mt-3" onClick={this.props.playGame}>
          Play Game
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  playGame: () => dispatch(actionCreators.lacXiNgau())
});

export default connect(null, mapDispatchToProps)(BaiTapTaiXiuRedux);
