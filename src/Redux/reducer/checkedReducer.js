const initialState = {
  check: [],
};
const checkdReducer = (currentStae = initialState, action) => {
  switch (action.type) {
    case "ADD_SEAT":
      const cloneAdd = [...currentStae.check];
  
      const index = cloneAdd.findIndex((item) => {
     
          return item.soGhe === action.payload.soGhe;
      });
      if(index !== -1){
          cloneAdd.splice(index,1);
      }
      else{
          cloneAdd.push(action.payload)
      }
      return { ...currentStae, check: cloneAdd };
    default:
      return currentStae;
  }
};
export default checkdReducer;
