const defaultState = {
  danhSachCuoc: [
    { ma: "cua", hinhAnh: "./img/cua.png", diemCuoc: 0 },
    { ma: "nai", hinhAnh: "./img/nai.png", diemCuoc: 0 },
    { ma: "ga", hinhAnh: "./img/ga.png", diemCuoc: 0 },
    { ma: "tom", hinhAnh: "./img/tom.png", diemCuoc: 0 },
    { ma: "ca", hinhAnh: "./img/ca.png", diemCuoc: 0 },
    { ma: "bau", hinhAnh: "./img/bau.png", diemCuoc: 0 }
  ],
  diemThuong: 100,
  xucSac: [
    { ma: "cua", hinhAnh: "./img/cua.png" },
    { ma: "nai", hinhAnh: "./img/nai.png" },
    { ma: "ga", hinhAnh: "./img/ga.png" }
  ]
};

const BaiTapGameBauCuaReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "CUOC_DIEM":
      if (state.diemThuong > 0) {
        const danhSachCuoc = [...state.danhSachCuoc];
        const quanCo = danhSachCuoc.find((qc) => qc.ma === action.payload.ma);
        if (quanCo) {
          quanCo.diemCuoc += 10;

          const diemThuong = state.diemThuong - 10;

          return { ...state, danhSachCuoc, diemThuong };
        }
      }

      break;
    default:
      break;
  }
  return { ...state };
};

export default BaiTapGameBauCuaReducer;
