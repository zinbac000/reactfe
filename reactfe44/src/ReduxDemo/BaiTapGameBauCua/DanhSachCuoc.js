import React, { Component } from "react";

import { connect } from "react-redux";

class DanhSachCuoc extends Component {
  renderDanhSachCuoc = () => {
    return this.props.danhSachCuoc.map((item) => {
      return (
        <div className="col-4" key={item.ma}>
          <div className="card text-center">
            <img className="card-img-top" src={item.hinhAnh} alt="hinh" />
            <div className="card-body">
              <button className="cuocButton" onClick={() => this.props.cuocDiem(item.ma)}>
                Cược: {item.diemCuoc}$
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
  cuocDiem: (ma) => dispatch({ type: "CUOC_DIEM", payload: { ma } })
});

export default connect(mapStateToProps, mapDispatchToProsp)(DanhSachCuoc);
