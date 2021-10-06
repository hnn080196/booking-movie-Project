import {
  BOOKING_LIST,
  GET_BOOKING_LIST,
  DAT_VE_HOAN_TAT,
} from "store/types/bookingTypes";

const { ThongTinLichChieu } = require("_core/models/ThongTinPhongVe");

const initialState = {
  chiTietPhongVe: new ThongTinLichChieu(),
  bookingList: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_BOOKING_LIST:
      return { ...state, chiTietPhongVe: payload };
    case BOOKING_LIST: {
      let newSeats = [];
      const seatExist = state.bookingList.find(
        (seat) => seat.maGhe === payload.maGhe
      );
      !seatExist
        ? (newSeats = [...state.bookingList, payload])
        : (newSeats = state.bookingList.filter(
            (seat) => seat.maGhe !== payload.maGhe
          ));

      return { ...state, bookingList: newSeats };
    }
    case DAT_VE_HOAN_TAT:
      return { ...state, bookingList: [] };
    default:
      return { ...state };
  }
};
