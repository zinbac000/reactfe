export const CUOC_DIEM = "CUOC_DIEM";
export const XOC_XUC_SAC = "XOC_XUC_SAC";

export const cuocDiem = (ma, inc) => ({
  type: CUOC_DIEM,
  payload: {
    ma,
    inc
  }
});

export const xocXucSac = () => ({
  type: XOC_XUC_SAC
});
