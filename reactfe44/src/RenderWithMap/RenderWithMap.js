import React, { Component } from "react";

export default class RenderWithMap extends Component {
  products = [
    { code: 1, name: "iPhoneX", price: 1000, image: "https://picsum.photos/200" },
    { code: 2, name: "iPhoneXS", price: 2000, image: "https://picsum.photos/200" },
    { code: 3, name: "iPhoneXS Max", price: 3000, image: "https://picsum.photos/200" }
  ];

  renderTable = () => {
    return this.products.map((product) => {
      return (
        <tr key={product.code}>
          <td>{product.code}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>
            <img width="64" src={product.image} alt="product banner" />
          </td>
          <td>
            <button className="btn btn-danger">
              <i className="fa fa-trash-alt"></i>
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <table className="table table-light bg-light">
          <caption className="text-uppercase text-center display-4" style={{ captionSide: "top" }}>
            Danh sách sản phẩm
          </caption>
          <thead className="thead-dark">
            <tr>
              <th>Mã SP</th>
              <th>Tên SP</th>
              <th>Giá</th>
              <th>Hình Ảnh</th>
              <th>Thao Tác</th>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </table>
      </div>
    );
  }
}
