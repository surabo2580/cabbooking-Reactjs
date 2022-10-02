
const initialState = {
    userStatus: false,
    userid:-1,
    username: "null",
    accessToken:"null"
};
const changeLoginStatus = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE": return {
            ...state,
            userStatus: action.payloadOne,
            userid: action.payloadTwo,
            username: action.payloadThree,
            
            accessToken:action.payloadFour
        };
        default: return state;
    }
}
export default changeLoginStatus;