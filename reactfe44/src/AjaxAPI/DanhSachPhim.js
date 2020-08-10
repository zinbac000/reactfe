import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "../redux/actions/index";

class DanhSachPhim extends Component {
  componentDidMount() {
    this.props.fetchMovies();
  }

  renderDanhSachPhim = () => {
    let danhSachPhim = <div className="loader">Loading...</div>;
    if (this.props.danhSachPhim) {
      danhSachPhim = this.props.danhSachPhim.map(({ maPhim, hinhAnh, tenPhim, moTa, ngayKhoiChieu, danhGia }) => (
        <div key={maPhim} className="col-3 mb-3">
          <div className="card shadow-lg">
            <img style={{ height: 300, objectFit: "cover", objectPosition: "center" }} className="card-img-top" src={hinhAnh} alt="phim poster" />
            <div className="card-body">
              <h5 style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{tenPhim}</h5>
              <small
                style={{
                  WebkitLineClamp: 3,
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  height: "42px",
                  lineHeight: "14px"
                }}
              >
                {moTa}
              </small>
              <p>Ngày chiếu: {new Date(ngayKhoiChieu).toLocaleDateString()}</p>
              <p>Đánh giá: {danhGia} điểm</p>
            </div>
          </div>
        </div>
      ));
    }

    if (this.props.error) {
      danhSachPhim = <p>{this.props.error}</p>;
    }

    return danhSachPhim;
  };
  render() {
    return (
      <div className="container">
        <h3 className="text-center display-4">Danh sách phim</h3>
        <div className="row">{this.renderDanhSachPhim()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  danhSachPhim: state.QuanLyPhimReducer.danhSachPhim,
  error: state.QuanLyPhimReducer.error
});

const mapDispatchToProps = {
  fetchMovies: actions.fetchMovies
};

export default connect(mapStateToProps, mapDispatchToProps)(DanhSachPhim);
