const initialState = {
  dataSeat: [{
      row:'',
      list:[],
  }],
};
const dataReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case "UPLOAD_DATA":
        const cloneData=[...action.payload];
        
        
       
      return { ...currentState,dataSeat:action.payload};
    default:
      return currentState;
  }
};
export default dataReducer
