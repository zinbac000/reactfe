import React, { Component } from "react";
import { connect } from "react-redux";
import BanCuoc from "./BanCuoc";
import KetQua from "./KetQua";

import * as actionCreators from "../../redux/actions/BaiTapTaiXiuAction";

import "./BaiTapTaiXiuRedux.css";

class BaiTapTaiXiuRedux extends Component {
  playGame = () => {
    this.props.playGame();
    let num = 0;
    const timerId = setInterval(() => {
      if (num === 10) {
        this.props.xuatKetQua();
        clearInterval(timerId);
      } else {
        this.props.randomXiNgau();
        num++;
      }
    }, 100);
  };
  render() {
    return (
      <div className="taiXiuContainer text-center">
        <h1 className="text-center">Bài tập tài xỉu</h1>
        <BanCuoc />
        <KetQua />
        <button disabled={this.props.playing} className="btnPlay mt-3" onClick={this.playGame}>
          Play Game
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  playing: state.TaiXiuReducer.playing
});

const mapDispatchToProps = (dispatch) => ({
  playGame: () => dispatch(actionCreators.lacXiNgau()),
  randomXiNgau: () => dispatch(actionCreators.randomXiNgau()),
  xuatKetQua: () => dispatch(actionCreators.xuatKetQua())
});

export default connect(mapStateToProps, mapDispatchToProps)(BaiTapTaiXiuRedux);
