import * as actionTypes from "./actionTypes";
import axios from "axios";

const fetchMoviesSuccess = (movies) => ({
  type: actionTypes.FETCH_MOVIES_SUCCESS,
  movies
});

const fetchMoviesFailed = (err) => ({
  type: actionTypes.FETCH_MOVIES_FAILED,
  err
});

export const fetchMovies = () => async (dispatch) => {
  try {
    const res = await axios.get("http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP06");
    dispatch(fetchMoviesSuccess(res.data));
  } catch (err) {
    console.log(err);
    dispatch(fetchMoviesFailed(err.message));
  }
};
