const stateSelectSeat = {
  SelectSeat: [],
};

export const SeatReducer = (state = stateSelectSeat, action) => {
  switch (action.type) {
    case "CHON_GHE_THANH_CONG": {
      return { ...state };
    }
    default:
  }
  return { ...state };
};
