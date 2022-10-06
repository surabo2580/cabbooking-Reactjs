import changeLoginStatus from "./changeLoginStatus";
import changeBookStatus from "./BookStatus"
import { combineReducers } from "redux";
const rootReducers = combineReducers({
    changeLoginStatus:changeLoginStatus,
    changeBookStatus:changeBookStatus
});
export default rootReducers;