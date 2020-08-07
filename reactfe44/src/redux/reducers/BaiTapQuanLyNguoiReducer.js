import * as actionTypes from "../actions/actionTypes";

const initialState = {
  mangNguoidung: [
    {
      taiKhoan: "nguyenvana",
      matKhau: "123",
      hoTen: "Nguyễn Văn A",
      email: "nguyenvana@gmail.com",
      soDt: "0123456789",
      maLoaiNguoiDung: "KhachHang"
    },
    { taiKhoan: "nguyenvanb", matKhau: "123", hoTen: "Nguyễn Văn B", email: "nguyenvanb@gmail.com", soDt: "0123456789", maLoaiNguoiDung: "KhachHang" }
  ],
  nguoiDungEdit: {
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    email: "",
    soDt: "",
    maLoaiNguoiDung: "KhachHang"
  },
  isEditMode: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_USER:
      return {
        ...state,
        mangNguoidung: [...state.mangNguoidung, action.user]
      };
    case actionTypes.EDIT_USER:
      return { ...state, nguoiDungEdit: action.user, isEditMode: true };
    case actionTypes.SAVE_USER:
      const updatedMangNguoiDung = [...state.mangNguoidung];
      const nguoiDungIndex = updatedMangNguoiDung.findIndex((nguoidung) => nguoidung.taiKhoan === action.user.taiKhoan);
      updatedMangNguoiDung.splice(nguoiDungIndex, 1, action.user);
      return {
        ...state,
        mangNguoidung: updatedMangNguoiDung,
        isEditMode: false,
        nguoiDungEdit: {
          taiKhoan: "",
          matKhau: "",
          hoTen: "",
          email: "",
          soDt: "",
          maLoaiNguoiDung: "KhachHang"
        }
      };
    default:
      return state;
  }
};
