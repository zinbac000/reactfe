import React, { Component } from "react";

export default class ModalGH extends Component {
  renderCartTable = () => {
    if (!this.props.cart.length) {
      return (
        <tr>
          <td colSpan={7} className="text-center">
            Giỏ hàng trống.
          </td>
        </tr>
      );
    }
    return this.props.cart.map((item) => {
      return (
        <tr key={item.product.maSP}>
          <td>{item.product.maSP}</td>
          <td>
            <img width={64} src={item.product.hinhAnh} alt="san pham" />
          </td>
          <td>{item.product.tenSP}</td>
          <td>{item.product.giaBan}</td>
          <td>
            <button className="btn btn-dark py-0 mr-2" onClick={() => this.props.modifyQuantity(item.product.maSP, -1)}>
              <i className="fa fa-minus" style={{ fontSize: "12px" }}></i>
            </button>
            {item.quantity}
            <button className="btn btn-dark py-0 ml-2" onClick={() => this.props.modifyQuantity(item.product.maSP, 1)}>
              <i className="fa fa-plus" style={{ fontSize: "12px" }}></i>
            </button>
          </td>
          <td>{item.quantity * item.product.giaBan}</td>
          <td>
            <button className="btn btn-danger" onClick={() => this.props.deleteItem(item.product.maSP)}>
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="modal fade" id="cartModal">
        <div className="modal-dialog" style={{ maxWidth: "unset", width: "fit-content" }}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Giỏ hàng</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table table-light">
                <thead>
                  <tr>
                    <th>Mã SP</th>
                    <th>Hình Ảnh</th>
                    <th>Tên</th>
                    <th>Giá</th>
                    <th>Số lượng</th>
                    <th>Thành tiền</th>
                    <th>Thao tác</th>
                  </tr>
                </thead>
                <tbody>{this.renderCartTable()}</tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button className="btn btn-dark" data-dismiss="modal">
                Đóng
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
