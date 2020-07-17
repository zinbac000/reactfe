import React, { Component } from "react";

export default class BT2ProductItem extends Component {
  render() {
    let { image, name, price, shortDescription } = this.props.product;
    return (
      <div className="card h-100">
        <img className="card-img-top" src={image} alt="product banner" />
        <div className="card-body">
          <h4
            className="card-title text-danger"
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: "2",
              overflow: "hidden",
              lineHeight: "22px",
              height: "50px"
            }}
          >
            {name}
          </h4>
          <p style={{ display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: "2", overflow: "hidden" }} className="card-text">
            {shortDescription}
          </p>
        </div>
        <div className="card-footer">
          <p>
            <strong>Giá tiền:</strong> {price}$
          </p>
          <button className="btn btn-dark">
            <i className="fa fa-shopping-cart mr-1"></i> Add to cart
          </button>
        </div>
      </div>
    );
  }
}
