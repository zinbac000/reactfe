import React, { Component } from "react";
import ProductComponent from "../RenderWithMap/ProductComponent/ProductComponent";
import ProductDetailComponent from "../RenderWithMap/ProductDetailComponent/ProductDetailComponent";

export default class DemoPropsFunction extends Component {
  state = {
    selectedProductDetail: null
  };

  products = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg"
    },
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg"
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg"
    }
  ];

  handleProductClick = (index) => {
    this.setState({
      selectedProductDetail: this.products[index]
    });
  };

  renderProductList = () => {
    return this.products.map((product, index) => {
      return (
        <div key={product.maSP} className="col-4">
          <ProductComponent product={product} clicked={() => this.handleProductClick(index)} />
        </div>
      );
    });
  };

  renderProductDetail = () => {
    let productDetail;
    if (this.state.selectedProductDetail) {
      productDetail = <ProductDetailComponent product={this.state.selectedProductDetail} />;
    }
    return productDetail;
  };

  render() {
    return (
      <div className="container mt-5">
        <h1 className="display-3 text-center mb-3">Danh sách sản phẩm</h1>
        <div className="row">{this.renderProductList()}</div>
        {this.renderProductDetail()}
      </div>
    );
  }
}
