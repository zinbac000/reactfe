import * as actionTypes from "../actions/BaiTapTaiXiuAction";

const defaultState = {
  winCount: 0,
  playCount: 0,
  selected: "",
  mangXiNgau: [1, 2, 3]
};

const BaiTapTaiXiuReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.DAT_CUOC: {
      return { ...state, selected: action.luaChon };
    }
    case actionTypes.LAC_XI_NGAU: {
      const mangXiNgauRandom = [];
      let sum = 0;
      let xiNgauSet = new Set();
      for (let i = 0; i < state.mangXiNgau.length; i++) {
        let soNgauNhien = Math.floor(Math.random() * 6) + 1;
        sum += soNgauNhien;
        xiNgauSet.add(soNgauNhien);
        mangXiNgauRandom.push(soNgauNhien);
      }

      let isWin = true;

      if (xiNgauSet.size > 1) {
        isWin = isWin && false;
      }

      if (sum >= 11 && sum <= 17 && state.selected === "XỈU") {
        isWin = isWin && false;
      }

      if (sum >= 4 && sum <= 10 && state.selected === "TÀI") {
        isWin = isWin && false;
      }

      return { ...state, mangXiNgau: mangXiNgauRandom, playCount: state.playCount + 1, winCount: isWin ? state.winCount + 1 : state.winCount };
    }
    default:
      return state;
  }
};

export default BaiTapTaiXiuReducer;
