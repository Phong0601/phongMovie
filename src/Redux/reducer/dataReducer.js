const initialState = {
  dataSeat: [],
};
const dataReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case "UPLOAD_DATA":
      const cloneData = [...action.payload];

      return { ...currentState, dataSeat: action.payload };
    case "ADD_SEAT":
      const cloneAdd = [...currentState.dataSeat];
   
      cloneAdd.forEach((item) => {
      
        item.danhSachGhe.forEach((seat) => {
          if(seat.soGhe === action.payload){
            seat.daDat = !seat.daDat
          }
        });
      });
      return { ...currentState,dataSeat : cloneAdd };
 
    case "DELETE_SEAT":
      const cloneDelete = [...currentState.dataSeat];
      console.log(action.payload);
      cloneDelete.forEach((item) => {
        item.danhSachGhe.forEach((seat) => {
          if(seat.soGhe === action.payload){
            seat.daDat = !seat.daDat
          }
        });
      });
      return { ...currentState,dataSeat : cloneDelete };
 
    default:
      return currentState;
  }
};
export default dataReducer;
