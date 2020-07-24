const defaultState = {
  gioHang: []
};

const BaiTapGioHangReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      let gioHangCapNhat = [...state.gioHang];
      let index = gioHangCapNhat.findIndex((spGH) => spGH.maSP === action.payload.maSP);
      if (index !== -1) {
        gioHangCapNhat[index].soLuong += 1;
      } else {
        gioHangCapNhat.push(action.payload);
      }
      return { gioHang: gioHangCapNhat };
    }

    case "DELETE_CART_ITEM": {
      let gioHangCapNhat = [...state.gioHang];
      let index = gioHangCapNhat.findIndex((spGH) => spGH.maSP === action.payload.id);
      gioHangCapNhat.splice(index, 1);
      return { gioHang: gioHangCapNhat };
    }

    default:
      return { ...state };
  }
};

export default BaiTapGioHangReducer;
