export const addToCart = (sp) => {
  let spGH = {
    maSP: sp.maSP,
    tenSP: sp.tenSP,
    gia: sp.giaBan,
    soLuong: 1,
    hinhAnh: sp.hinhAnh
  };

  return {
    type: "ADD_TO_CART",
    payload: spGH
  };
};

export const deleteCartItem = (id) => ({ type: "DELETE_CART_ITEM", payload: { id } });
