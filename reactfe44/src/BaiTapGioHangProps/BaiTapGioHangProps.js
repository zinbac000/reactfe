import React, { Component } from "react";

import ModalGH from "./ModalGH";
import DSSP from "./DSSP";

export default class BaiTapGioHangProps extends Component {
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

  state = {
    cart: []
  };

  addProductToCart = (productId) => {
    let newCart = [...this.state.cart];
    let foundProduct = newCart.find((item) => item.product.maSP === productId);
    if (foundProduct) {
      foundProduct.quantity++;
    } else {
      newCart.push({
        product: this.products.find((p) => p.maSP === productId),
        quantity: 1
      });
    }

    this.setState({
      cart: newCart
    });
  };

  deleteCartItem = (cartProductId) => {
    let newCart = [...this.state.cart];
    let cartIndex = newCart.findIndex((item) => item.product.maSP === cartProductId);
    if (cartIndex !== -1) {
      newCart.splice(cartIndex, 1);
    }

    this.setState({
      cart: newCart
    });
  };

  modifyCartQuantity = (productId, increment) => {
    let newCart = [...this.state.cart];
    let foundItem = newCart.find((item) => item.product.maSP === productId);
    foundItem.quantity += increment;
    foundItem.quantity = foundItem.quantity < 1 ? 1 : foundItem.quantity;

    this.setState({
      cart: newCart
    });
  };

  render() {
    return (
      <div className="container mt-5">
        <button className="btn btn-danger" data-toggle="modal" data-target="#cartModal">
          Giỏ hàng ({this.state.cart.reduce((total, currentItem) => total + currentItem.quantity, 0)})
        </button>
        <DSSP danhSach={this.products} addToCart={this.addProductToCart} />
        <ModalGH cart={this.state.cart} deleteItem={this.deleteCartItem} modifyQuantity={this.modifyCartQuantity} />
      </div>
    );
  }
}
