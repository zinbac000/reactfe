import React, { Component } from "react";
import { connect } from "react-redux";

class KetQua extends Component {
  render() {
    return (
      <div className="text-center">
        <h2>
          Bạn đã chọn: <span style={{ color: "red" }}>{this.props.luaChon}</span>
        </h2>
        <h2>
          Bạn đã thắng: <span style={{ color: "blue" }}>{this.props.winCount}</span>
        </h2>
        <h2>
          Tổng số bàn chơi: <span style={{ color: "orange" }}>{this.props.playCount}</span>
        </h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  luaChon: state.TaiXiuReducer.selected,
  winCount: state.TaiXiuReducer.winCount,
  playCount: state.TaiXiuReducer.playCount
});

export default connect(mapStateToProps)(KetQua);
