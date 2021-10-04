import { combineReducers } from "redux";
import bookingReducer from "./bookingReducer";
import cinemaReducer from "./cinemaReducer";
import movieReducers from "./movieReducers";
import userReducer from "./userReducer";
import loadingReducer from "./loadingReducer";

const rootReducer = combineReducers({
  //
  movies: movieReducers,
  cinemas: cinemaReducer,
  users: userReducer,
  booking: bookingReducer,
  loading: loadingReducer,
});
export default rootReducer;
