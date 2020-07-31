export const DAT_CUOC = "DAT_CUOC";
export const LAC_XI_NGAU = "LAC_XI_NGAU";

export const datCuoc = (luaChon) => ({
  type: DAT_CUOC,
  luaChon
});

export const lacXiNgau = () => ({
  type: LAC_XI_NGAU
});
