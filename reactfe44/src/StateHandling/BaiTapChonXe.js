import React, { Component } from "react";

export default class BaiTapChonXe extends Component {
  state = {
    selectedColor: "black"
  };

  handleChangeColor(color) {
    this.setState({
      selectedColor: color
    });
  }

  render() {
    return (
      <div className="row p-3 d-flex justify-content-center">
        <div className="col-12 text-center">
          <p>Please choose your favorite car's color</p>
        </div>
        <div className="col-4">
          <img className="d-block w-100" src={`./img/products/${this.state.selectedColor}-car.jpg`} alt="car" />
        </div>
        <div className="col-4 d-flex flex-column align-items-start">
          <button className="btn flex-grow-1" onClick={() => this.handleChangeColor("black")}>
            <img style={{ width: "50px" }} src="./img/icons/icon-black.jpg" alt="" />
          </button>
          <button className="btn flex-grow-1" onClick={() => this.handleChangeColor("red")}>
            <img style={{ width: "50px" }} src="./img/icons/icon-red.jpg" alt="" />
          </button>
          <button className="btn flex-grow-1" onClick={() => this.handleChangeColor("silver")}>
            <img style={{ width: "50px" }} src="./img/icons/icon-silver.jpg" alt="" />
          </button>
          <button className="btn flex-grow-1" onClick={() => this.handleChangeColor("steel")}>
            <img style={{ width: "50px" }} src="./img/icons/icon-steel.jpg" alt="" />
          </button>
        </div>
      </div>
    );
  }
}
