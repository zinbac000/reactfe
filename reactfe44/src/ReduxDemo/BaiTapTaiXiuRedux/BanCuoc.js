import React, { Component } from "react";

import { connect } from "react-redux";
import * as actionCreators from "../../redux/actions/BaiTapTaiXiuAction";

class BanCuoc extends Component {
  renderXiNgau = () => {
    return this.props.mangXiNgau.map((xingau, index) => (
      <img
        className={this.props.playing ? "animShake" : ""}
        style={{ display: "block", height: "100%" }}
        key={index}
        src={`./img/${xingau}.png`}
        alt=""
      />
    ));
  };
  render() {
    return (
      <div className="d-flex justify-content-between w-50 m-auto px-3 p-5">
        <button className={["xiNgau", this.props.selected === "TÀI" ? "selected" : null].join(" ")} onClick={() => this.props.datCuoc("TÀI")}>
          TÀI
        </button>
        <div
          className="d-flex"
          style={{ overflow: "hidden", height: "30px", border: "4px solid #000", borderRadius: "5px", boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }}
        >
          {this.renderXiNgau()}
        </div>
        <button className={["xiNgau", this.props.selected === "XỈU" ? "selected" : null].join(" ")} onClick={() => this.props.datCuoc("XỈU")}>
          XỈU
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  mangXiNgau: state.TaiXiuReducer.mangXiNgau,
  selected: state.TaiXiuReducer.selected,
  playing: state.TaiXiuReducer.playing
});

const mapDispatchToProps = (dispatch) => ({
  datCuoc: (luaChon) => dispatch(actionCreators.datCuoc(luaChon))
});

export default connect(mapStateToProps, mapDispatchToProps)(BanCuoc);
