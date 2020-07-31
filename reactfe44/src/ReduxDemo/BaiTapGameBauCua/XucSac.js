import React, { Component } from "react";

import { connect } from "react-redux";
import * as actionCreators from "../../redux/actions/BaiTapGioHangAction";
import "./XucSac.css";

class XucSac extends Component {
  renderXucSac = () => {
    return this.props.xucSacs.map((xs, index) => {
      return <img key={xs.ma + Math.random(100)} width={70} className="bounceWithFadeIn mx-2" src={xs.hinhAnh} alt="con co" />;
    });
  };

  render() {
    return (
      <div className="d-flex flex-column align-items-center">
        <div className="bow d-flex align-items-center justify-content-center flex-wrap">{this.renderXucSac()}</div>
        <button className="soc shake mt-5" onClick={() => this.props.socXucSac()}>
          <img width={200} src="./img/soc.png" alt="" />
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  xucSacs: state.GameBauCuaReducer.xucSac
});

const mapDispatchToProps = (dispatch) => ({
  socXucSac: () => dispatch(actionCreators.xocXucSac())
});

export default connect(mapStateToProps, mapDispatchToProps)(XucSac);
