import { CLOSE_LOADING, OPEN_LOADING } from "store/types/loadingTypes";

const initialState = {
  isLoading: false,
};

export default (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case OPEN_LOADING:
      state.isLoading = true;
      return { ...state };
    case CLOSE_LOADING:
      state.isLoading = false;
      return { ...state };

    default:
      return { ...state };
      break;
  }
};
