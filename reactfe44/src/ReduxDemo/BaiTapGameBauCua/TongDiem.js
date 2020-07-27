import React, { Component } from "react";

import classes from "./TongDiem.module.css";

import { connect } from "react-redux";

class TongDiem extends Component {
  render() {
    return (
      <div className={classes.TongDiem}>
        <div className={[classes.TienThuong, "bounce"].join(" ")}>
          Tiền thưởng: <span>{this.props.diemThuong}</span>$
        </div>
        <button onClick={() => window.location.reload()}>Chơi lại</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  diemThuong: state.GameBauCuaReducer.diemThuong
});

export default connect(mapStateToProps)(TongDiem);
