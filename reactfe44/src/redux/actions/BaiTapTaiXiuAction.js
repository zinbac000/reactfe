export const DAT_CUOC = "DAT_CUOC";
export const LAC_XI_NGAU = "LAC_XI_NGAU";
export const XUAT_KET_QUA = "XUAT_KET_QUA";
export const RANDOM_XINGAU = "RANDOM_XINGAU";

export const datCuoc = (luaChon) => ({
  type: DAT_CUOC,
  luaChon
});

export const lacXiNgau = () => ({
  type: LAC_XI_NGAU
});

export const xuatKetQua = () => ({
  type: XUAT_KET_QUA
});

export const randomXiNgau = () => ({
  type: RANDOM_XINGAU
});
