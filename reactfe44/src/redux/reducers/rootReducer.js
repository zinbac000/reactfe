import { combineReducers } from "redux";

// import BaiTapGioHangReducer from "./BaiTapGioHangReducer";
//import BaiTapGameBauCuaReducer from "./BaiTapGameBauCuaReducer";
import BaiTapTaiXiuReducer from "./BaiTapTaiXiuReducer";
import BaiTapQuanLyNguoiDungReducer from "./BaiTapQuanLyNguoiReducer";

// nơi quản lý state của toàn ứng dụng
export default combineReducers({
  //nơi khai báo các reducer theo từng feature
  TaiXiuReducer: BaiTapTaiXiuReducer,
  BaiTapQuanLyNguoiDungReducer
});
