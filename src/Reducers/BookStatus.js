
const initialState = {
    bookid:-1,
};
const changeBookStatus = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE": return {
            ...state,
            bookid: action.payloadTwo,
        };
        default: return state;
    }
}
export default changeBookStatus ;