export const addSeat = (value) => {
    return{
        type:"ADD_SEAT",
        payload:value,
    }
}
export const deleteSeat = (value) => {
    return{
        type:"DELETE_SEAT",
        payload:value,
    }
}
export const complete = (arr) => {
    return {
        type:"COMPLETE",
        payload:arr
    }
}