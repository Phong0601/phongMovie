export const addSeat = (value) => {
    return{
        type:"ADD_SEAT",
        payload:value,
    }
}
export const complete = (arr) => {
    return {
        type:"COMPLETE",
        payload:arr
    }
}