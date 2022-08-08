const initialState = {
  dataSeat: [],
};
const dataReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case "UPLOAD_DATA":
      const cloneData = [...action.payload];

      return { ...currentState, dataSeat: action.payload };
    case "COMPLETE":
     
      return { ...currentState };
    default:
      return currentState;
  }
};
export default dataReducer;
