import { combineReducers } from "redux";

// import BaiTapGioHangReducer from "./BaiTapGioHangReducer";
import BaiTapGameBauCuaReducer from "./BaiTapGameBauCuaReducer";

// nơi quản lý state của toàn ứng dụng
export default combineReducers({
  //nơi khai báo các reducer theo từng feature
  GameBauCuaReducer: BaiTapGameBauCuaReducer
});
