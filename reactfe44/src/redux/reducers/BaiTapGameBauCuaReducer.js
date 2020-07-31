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

const xucSacDefault = [
  { ma: "cua", hinhAnh: "./img/cua.png" },
  { ma: "nai", hinhAnh: "./img/nai.png" },
  { ma: "ga", hinhAnh: "./img/ga.png" },
  { ma: "tom", hinhAnh: "./img/tom.png" },
  { ma: "ca", hinhAnh: "./img/ca.png" },
  { ma: "bau", hinhAnh: "./img/bau.png" }
];

const BaiTapGameBauCuaReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "CUOC_DIEM":
      if (state.diemThuong > 0) {
        const danhSachCuoc = [...state.danhSachCuoc];
        const quanCoIndex = danhSachCuoc.findIndex((qc) => qc.ma === action.payload.ma);
        if (quanCoIndex !== -1) {
          const newQuanCo = {
            ...danhSachCuoc[quanCoIndex],
            diemCuoc: danhSachCuoc[quanCoIndex].diemCuoc + 10
          };

          danhSachCuoc.splice(quanCoIndex, 1, newQuanCo);

          const diemThuong = state.diemThuong - 10;

          return { ...state, danhSachCuoc, diemThuong };
        }
      }

      break;
    case "XOC_XUC_SAC":
      // random 3 xuc sac in a bow
      const newXucSacs = [];
      for (let i = 0; i < 3; i++) {
        newXucSacs.push(xucSacDefault[Math.floor(Math.random() * 6)]);
      }

      // Tạo 1 mảng số lần xuất hiện của các xúc sắc trong tô
      const xucSacFrequency = newXucSacs.reduce((result, xucSac) => {
        if (result[xucSac.ma]) {
          result[xucSac.ma] += 1;
        } else {
          result[xucSac.ma] = 1;
        }
        return result;
      }, {});

      // Tính điểm thưởng dựa trên mảng số lần xuất hiện
      const diemThuongCongThem = Object.keys(xucSacFrequency).reduce((tongDiem, maXucSac) => {
        const conCuoc = state.danhSachCuoc.find((qc) => qc.ma === maXucSac);
        if (conCuoc.diemCuoc > 0) {
          tongDiem += (xucSacFrequency[maXucSac] + 1) * conCuoc.diemCuoc;
        }
        return tongDiem;
      }, 0);
      return { ...state, xucSac: newXucSacs, diemThuong: state.diemThuong + diemThuongCongThem, danhSachCuoc: [...defaultState.danhSachCuoc] };
    default:
      break;
  }
  return { ...state };
};

export default BaiTapGameBauCuaReducer;
