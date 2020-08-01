import React, { Component } from "react";

import { connect } from "react-redux";
import * as actionCreators from "../../redux/actions/BaiTapTaiXiuAction";

class BanCuoc extends Component {
  renderXiNgau = () => {
    return this.props.mangXiNgau.map((xingau, index) => <img key={index} width={30} src={`./img/${xingau}.png`} alt="" />);
  };
  render() {
    return (
      <div className="d-flex justify-content-between w-50 m-auto px-3 p-5">
        <button className="xiNgau" onClick={() => this.props.datCuoc("TÀI")}>
          TÀI
        </button>
        <div>{this.renderXiNgau()}</div>
        <button className="xiNgau" onClick={() => this.props.datCuoc("XỈU")}>
          XỈU
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  mangXiNgau: state.TaiXiuReducer.mangXiNgau
});

const mapDispatchToProps = (dispatch) => ({
  datCuoc: (luaChon) => dispatch(actionCreators.datCuoc(luaChon))
});

export default connect(mapStateToProps, mapDispatchToProps)(BanCuoc);
