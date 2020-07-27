import React, { Component } from "react";

import { connect } from "react-redux";

import "./XucSac.css";

class XucSac extends Component {
  renderXucSac = () => {
    return this.props.xucSacs.map((xs) => {
      return <img key={xs.ma} width={70} className="bounceWithFadeIn" src={xs.hinhAnh} alt="con co" />;
    });
  };

  render() {
    return (
      <div className="d-flex flex-column align-items-center">
        <div className="bow d-flex align-items-center justify-content-center flex-wrap">{this.renderXucSac()}</div>
        <button className="soc shake mt-5">
          <img width={200} src="./img/soc.png" alt="" />
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  xucSacs: state.GameBauCuaReducer.xucSac
});

export default connect(mapStateToProps)(XucSac);
