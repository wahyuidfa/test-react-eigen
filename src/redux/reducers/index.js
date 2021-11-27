import { combineReducers } from "redux";
import getNewsListReducer from "./getNewsListReducer";

const rootReducer = combineReducers({
    getNewsListReducer,
})

export default rootReducer;
