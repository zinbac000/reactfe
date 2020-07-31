import React, { Component } from "react";

import { connect } from "react-redux";

import * as actionCreators from "../../redux/actions/BaiTapGioHangAction";

class DanhSachCuoc extends Component {
  renderDanhSachCuoc = () => {
    return this.props.danhSachCuoc.map((item) => {
      return (
        <div className="col-4" key={item.ma}>
          <div className="card text-center">
            <img className="card-img-top" src={item.hinhAnh} alt="hinh" />
            <div className="card-body px-0 d-flex align-items-center">
              Cược:
              <button className="cuocButton mx-1" onClick={() => this.props.cuocDiem(item.ma, -1)}>
                -
              </button>
              <span style={{ flexBasis: "40px" }}>{item.diemCuoc}$</span>
              <button className="cuocButton mx-1" onClick={() => this.props.cuocDiem(item.ma, 1)}>
                +
              </button>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return <div className="row">{this.renderDanhSachCuoc()}</div>;
  }
}

const mapStateToProps = (state) => ({
  danhSachCuoc: state.GameBauCuaReducer.danhSachCuoc
});

const mapDispatchToProsp = (dispatch) => ({
  cuocDiem: (ma, inc) => dispatch(actionCreators.cuocDiem(ma, inc))
});

export default connect(mapStateToProps, mapDispatchToProsp)(DanhSachCuoc);
