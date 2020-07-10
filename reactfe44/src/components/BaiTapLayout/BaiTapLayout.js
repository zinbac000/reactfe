import React, { Component } from "react";
import BTHeader from "./BTHeader";
import BTCarousel from "./BTCarousel";
import BTProducts from "./BTProducts";
import BTTrending from "./BTTrending";
import BTPromotion from "./BTPromotion";

export default class BaiTapLayout extends Component {
  render() {
    return (
      <div className="bg-dark">
        <BTHeader />
        <BTCarousel />
        <BTProducts />
        <BTTrending />
        <BTPromotion />
      </div>
    );
  }
}
